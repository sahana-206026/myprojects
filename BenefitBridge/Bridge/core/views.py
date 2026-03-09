from django.core.mail import send_mail
from django.conf import settings



from django.shortcuts import render

def home(request):
    return render(request, "home.html")

def eligibility(request):
    if request.method == "GET":
        email = request.GET.get("email")
        notify = request.GET.get("notify")

        if email and notify:
            request.session["notify_email"] = email

    return render(request, "eligibility.html")

from django.shortcuts import render, redirect

def schemes(request):
    schemes_list = [
    {
        "id": 1,
        "name": "PM Awas Yojana",
        "desc": "Housing support for low-income families",
        "reason": "Income below ₹2 Lakhs",
        "url": "https://pmaymis.gov.in/",
    },
    {
        "id": 2,
        "name": "PM Ujjwala Yojana",
        "desc": "Free LPG gas connection",
        "reason": "Low-income household",
        "url": "https://www.pmuy.gov.in/",
    },
    {
        "id": 3,
        "name": "Ayushman Bharat",
        "desc": "Health insurance up to ₹5 Lakhs",
        "reason": "Eligible family",
        "url": "https://pmjay.gov.in/",
    },
    {
        "id": 4,
        "name": "PM Kisan Samman Nidhi",
        "desc": "₹6000 yearly support to farmers",
        "reason": "Registered farmer",
        "url": "https://pmkisan.gov.in/",
    },
    {
        "id": 5,
        "name": "National Scholarship Portal",
        "desc": "Scholarships for students",
        "reason": "Student category",
        "url": "https://scholarships.gov.in/",
    },
    {
        "id": 6,
        "name": "Stand Up India",
        "desc": "Loans for SC/ST & women entrepreneurs",
        "reason": "Entrepreneur category",
        "url": "https://www.standupmitra.in/",
    },
    {
        "id": 7,
        "name": "PM Mudra Yojana",
        "desc": "Business loans up to ₹10 Lakhs",
        "reason": "Small business owner",
        "url": "https://www.mudra.org.in/",
    },
    {
        "id": 8,
        "name": "Atal Pension Yojana",
        "desc": "Guaranteed pension scheme",
        "reason": "Unorganized sector worker",
        "url": "https://www.npscra.nsdl.co.in/",
    },
]

    # SAVE SCHEME
    save_id = request.GET.get("save")
    if save_id:
        saved = request.session.get("saved_schemes", [])
        if save_id not in saved:
            saved.append(save_id)
            request.session["saved_schemes"] = saved
        return redirect("saved")

    return render(request, "schemes.html", {"schemes": schemes_list})

    # 🔔 SEND EMAIL IF USER OPTED
    email = request.session.get("notify_email")
    if email:
        send_mail(
            subject="New Government Scheme Available",
            message=(
                "A new government scheme has been added on BenefitBridge.\n\n"
                "Visit the website to check eligibility and apply."
            ),
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=True,
        )

        # Prevent repeated emails
        del request.session["notify_email"]

    return render(request, "schemes.html", {"schemes": schemes_list})


    # SAVE SCHEME
    save_id = request.GET.get("save")
    if save_id:
        saved = request.session.get("saved_schemes", [])
        if save_id not in saved:
            saved.append(save_id)
            request.session["saved_schemes"] = saved
        return redirect("saved")

    return render(request, "schemes.html", {
    "schemes": schemes_list,
    "new_scheme": True
})



def scheme_detail(request, id):
    schemes = {
        1: {
            "name": "PM Awas Yojana",
            "desc": "Provides affordable housing to low-income families.",
            "benefits": [
                "Subsidy on home loans",
                "Financial assistance for house construction",
                "Priority for women beneficiaries",
            ],
            "eligibility": [
                "Indian citizen",
                "Income below ₹2 Lakhs",
                "Should not own a pucca house",
            ],
            "documents": [
                "Aadhaar Card",
                "Income Certificate",
                "Bank Account Details",
            ],
            "url": "https://pmaymis.gov.in/",
        },
        2: {
            "name": "PM Ujjwala Yojana",
            "desc": "Provides free LPG gas connections to women from BPL families.",
            "benefits": [
                "Free LPG connection",
                "Improved health for women",
                "Reduced indoor air pollution",
            ],
            "eligibility": [
                "Woman applicant",
                "BPL household",
                "No existing LPG connection",
            ],
            "documents": [
                "Aadhaar Card",
                "BPL Ration Card",
                "Bank Passbook",
            ],
            "url": "https://www.pmuy.gov.in/",
        },
        3: {
            "name": "Ayushman Bharat",
            "desc": "Health insurance coverage up to ₹5 Lakhs per family per year.",
            "benefits": [
                "Cashless hospital treatment",
                "Coverage for major surgeries",
                "Nationwide hospital network",
            ],
            "eligibility": [
                "SECC listed family",
                "Low-income household",
            ],
            "documents": [
                "Aadhaar Card",
                "Ration Card",
            ],
            "url": "https://pmjay.gov.in/",
        },
    }

    scheme = schemes.get(id)

    return render(request, "scheme_detail.html", {"scheme": scheme})


def saved(request):
    all_schemes = [
        {
            "id": "1",
            "name": "PM Awas Yojana",
            "desc": "Housing support for low-income families",
            "url": "https://pmaymis.gov.in/",
        },
        {
            "id": "2",
            "name": "PM Ujjwala Yojana",
            "desc": "Free LPG gas connection",
            "url": "https://www.pmuy.gov.in/",
        },
        {
            "id": "3",
            "name": "Ayushman Bharat",
            "desc": "Health insurance up to ₹5 Lakhs",
            "url": "https://pmjay.gov.in/",
        },
    ]

    # REMOVE SCHEME
    remove_id = request.GET.get("remove")
    if remove_id:
        saved = request.session.get("saved_schemes", [])
        if remove_id in saved:
            saved.remove(remove_id)
            request.session["saved_schemes"] = saved
        return redirect("saved")

    saved_ids = request.session.get("saved_schemes", [])
    saved_schemes = [s for s in all_schemes if s["id"] in saved_ids]

    return render(request, "saved.html", {"schemes": saved_schemes})

    # REMOVE SCHEME
    remove_id = request.GET.get("remove")
    if remove_id:
        saved = request.session.get("saved_schemes", [])
        if remove_id in saved:
            saved.remove(remove_id)
            request.session["saved_schemes"] = saved
        return redirect("saved")

    saved_ids = request.session.get("saved_schemes", [])
    saved_schemes = [s for s in all_schemes if s["id"] in saved_ids]

    return render(request, "saved.html", {"schemes": saved_schemes})

def about(request):
    return render(request, "about.html")
def trigger_notification(request):
    email = request.session.get("notify_email")
    if email:
        print(f"Email sent to {email}: New scheme added!")
    return redirect("schemes")

