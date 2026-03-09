
import { Question } from "@/components/ui/interview-questions";

export const cseQuestions: Question[] = [
  {
    id: "cse-1",
    question: "What is the difference between process and thread?",
    answer: "A process is an instance of a program execution that has its own memory space, while a thread is a segment of a process that shares the same memory space as its parent process.\n\nProcesses are isolated from each other, while threads within a process share resources. Processes are heavyweight and require more resources, while threads are lightweight and require fewer resources. Context switching between processes is more expensive than context switching between threads.",
    field: "CSE",
    level: "Basic"
  },
  {
    id: "cse-2",
    question: "Explain the concept of OOP (Object-Oriented Programming).",
    answer: "Object-Oriented Programming is a programming paradigm based on the concept of objects, which can contain data and code: data in the form of fields (attributes), and code in the form of procedures (methods).\n\nThe main principles of OOP are:\n1. Encapsulation: Binding data and methods that manipulate the data together as a single unit.\n2. Inheritance: The ability of a class to derive properties and characteristics from another class.\n3. Polymorphism: The ability of different classes to respond to the same message or method invocation in different ways.\n4. Abstraction: Hiding the complex implementation details and showing only the necessary features of an object.",
    field: "CSE",
    level: "Basic"
  },
  {
    id: "cse-3",
    question: "What is a Binary Search Tree and how does it work?",
    answer: "A Binary Search Tree (BST) is a node-based binary tree data structure that has the following properties:\n\n1. The left subtree of a node contains only nodes with keys lesser than the node's key.\n2. The right subtree of a node contains only nodes with keys greater than the node's key.\n3. The left and right subtree each must also be a binary search tree.\n\nThis property enables efficient operations like search, insertion, and deletion with an average time complexity of O(log n), where n is the number of nodes in the tree. However, in the worst case (when the tree is highly unbalanced), these operations can degrade to O(n).",
    field: "CSE",
    level: "Intermediate"
  },
  {
    id: "cse-4",
    question: "Explain the concept of Virtual Memory.",
    answer: "Virtual memory is a memory management capability of an operating system that uses hardware and software to allow a computer to compensate for physical memory shortages by temporarily transferring data from random access memory (RAM) to disk storage.\n\nVirtual memory creates an illusion to users of a very large main memory. It works by using a technique called paging, where memory is divided into fixed-size blocks called pages. When a program needs more memory than is physically available, the operating system moves the least-used pages from RAM to a special area on the hard drive called swap space or page file.\n\nThe mapping between virtual memory addresses and physical memory addresses is handled by the Memory Management Unit (MMU) using page tables.",
    field: "CSE",
    level: "Intermediate"
  },
  {
    id: "cse-5",
    question: "What is the time complexity of quicksort and how does it work?",
    answer: "Quicksort is a divide-and-conquer algorithm that works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot.\n\nThe time complexity of quicksort is:\n- Average case: O(n log n)\n- Best case: O(n log n)\n- Worst case: O(n²)\n\nThe worst case occurs when the pivot selection consistently results in highly unbalanced partitions (e.g., when the array is already sorted and the first or last element is chosen as pivot). However, this can be mitigated by using randomized pivot selection or median-of-three pivot selection strategies.",
    field: "CSE",
    level: "Intermediate"
  },
  {
    id: "cse-6",
    question: "Explain the CAP theorem in distributed systems.",
    answer: "The CAP theorem (also known as Brewer's theorem) states that it is impossible for a distributed data store to simultaneously provide more than two out of the following three guarantees:\n\n1. Consistency: Every read receives the most recent write or an error.\n2. Availability: Every request receives a non-error response, without guaranteeing that it contains the most recent write.\n3. Partition Tolerance: The system continues to operate despite arbitrary message loss or failure of part of the system.\n\nIn practice, partition tolerance is necessary for distributed systems, so designers usually have to make a trade-off between consistency and availability. Systems like Apache Cassandra prioritize availability, while systems like MongoDB prioritize consistency.",
    field: "CSE",
    level: "Advanced"
  },
  {
    id: "cse-7",
    question: "What are design patterns and explain a few common ones.",
    answer: "Design patterns are typical solutions to common problems in software design. They represent best practices evolved over time by experienced software developers.\n\nSome common design patterns include:\n\n1. Singleton: Ensures a class has only one instance and provides a global point of access to it.\n\n2. Factory Method: Creates objects without specifying the exact class of object that will be created, deferring instantiation to subclasses.\n\n3. Observer: Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.\n\n4. Strategy: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.\n\n5. Decorator: Attaches additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.",
    field: "CSE",
    level: "Advanced"
  },
  {
    id: "cse-8",
    question: "What is the difference between HTTP and HTTPS?",
    answer: "HTTP (Hypertext Transfer Protocol) and HTTPS (HTTP Secure) are protocols used for transmitting data over the web:\n\n1. Security: HTTP is unsecured while HTTPS is secured using SSL/TLS protocol for encryption.\n\n2. Port: HTTP uses port 80 by default, while HTTPS uses port 443.\n\n3. Data Transmission: HTTP transfers data in plain text, making it vulnerable to eavesdropping and man-in-the-middle attacks. HTTPS encrypts the data during transmission, making it secure from interception.\n\n4. Authentication: HTTPS provides authentication of the website through certificates issued by trusted Certificate Authorities (CAs).\n\n5. Search Engine Ranking: HTTPS websites are generally ranked higher in search engine results, as security is a priority for major search engines like Google.",
    field: "CSE",
    level: "Basic"
  }
];

export const eceQuestions: Question[] = [
  {
    id: "ece-1",
    question: "What is the difference between microprocessor and microcontroller?",
    answer: "A microprocessor is a CPU (Central Processing Unit) that performs the computational tasks in a computer system, while a microcontroller is a complete computer system on a single chip that includes a CPU, memory, and I/O peripherals.\n\nMicroprocessors require external components like memory and I/O devices to function as a complete system, while microcontrollers have these components integrated within a single chip. Microprocessors are designed for general-purpose applications with high processing power, while microcontrollers are optimized for specific tasks, typically in embedded systems with lower power consumption requirements.",
    field: "ECE",
    level: "Basic"
  },
  {
    id: "ece-2",
    question: "Explain the concept of modulation and its types.",
    answer: "Modulation is the process of varying one or more properties of a carrier signal with a modulating signal containing the information to be transmitted.\n\nThe main types of modulation are:\n\n1. Amplitude Modulation (AM): Varies the amplitude of the carrier signal according to the modulating signal while keeping frequency and phase constant.\n\n2. Frequency Modulation (FM): Varies the frequency of the carrier signal according to the modulating signal while keeping amplitude constant.\n\n3. Phase Modulation (PM): Varies the phase of the carrier signal according to the modulating signal.\n\n4. Digital Modulation: Includes techniques like ASK (Amplitude Shift Keying), FSK (Frequency Shift Keying), PSK (Phase Shift Keying), and QAM (Quadrature Amplitude Modulation) which are used to encode digital data onto analog carrier signals.",
    field: "ECE",
    level: "Basic"
  },
  {
    id: "ece-3",
    question: "What are the different types of semiconductor memories?",
    answer: "Semiconductor memories are categorized into two main types: volatile and non-volatile.\n\nVolatile memories (lose data when power is turned off):\n1. SRAM (Static Random Access Memory): Fast, uses flip-flops, but consumes more power and has lower density.\n2. DRAM (Dynamic Random Access Memory): Uses capacitors to store data, requires periodic refreshing, higher density but slower than SRAM.\n\nNon-volatile memories (retain data without power):\n1. ROM (Read-Only Memory): Data is permanently stored during manufacturing.\n2. PROM (Programmable ROM): Can be programmed once after manufacturing.\n3. EPROM (Erasable PROM): Can be erased using UV light and reprogrammed.\n4. EEPROM (Electrically EPROM): Can be erased and reprogrammed electrically.\n5. Flash Memory: EEPROM-based technology with higher density and block-wise erasure capability.\n6. NVRAM (Non-Volatile RAM): Combines the features of both RAM and ROM.",
    field: "ECE",
    level: "Intermediate"
  },
  {
    id: "ece-4",
    question: "Explain the function of different layers in the OSI model.",
    answer: "The OSI (Open Systems Interconnection) model consists of seven layers, each serving specific functions:\n\n1. Physical Layer: Transmits raw bit stream over physical medium, defines hardware specifications.\n\n2. Data Link Layer: Provides node-to-node data transfer, handles error detection/correction, and manages physical addressing (MAC).\n\n3. Network Layer: Provides routing and forwarding of packets between networks, handles logical addressing (IP).\n\n4. Transport Layer: Ensures end-to-end delivery of data, provides reliability, flow control, and error recovery (TCP/UDP).\n\n5. Session Layer: Establishes, maintains, and terminates connections between applications.\n\n6. Presentation Layer: Translates data between application and network formats, handles encryption, compression, and protocol conversion.\n\n7. Application Layer: Provides interfaces for applications to access network services, includes protocols like HTTP, FTP, SMTP, etc.",
    field: "ECE",
    level: "Intermediate"
  },
  {
    id: "ece-5",
    question: "What is FPGA and how does it differ from ASIC?",
    answer: "FPGA (Field-Programmable Gate Array) is an integrated circuit designed to be configured after manufacturing, while ASIC (Application-Specific Integrated Circuit) is a chip designed for a specific application.\n\nKey differences include:\n\n1. Programmability: FPGAs can be reprogrammed for different functions, while ASICs are fixed after manufacturing.\n\n2. Development Cost and Time: FPGAs have lower development costs and faster time-to-market, while ASICs require significant initial investment but are cheaper per unit in high volume production.\n\n3. Performance: ASICs generally offer better performance, lower power consumption, and smaller size compared to FPGAs implementing the same function.\n\n4. Production Volume: FPGAs are cost-effective for low to medium volume production, while ASICs are economical for high volume production.\n\n5. Flexibility: FPGAs allow for field updates and modifications, while ASICs cannot be modified after production.",
    field: "ECE",
    level: "Advanced"
  },
  {
    id: "ece-6",
    question: "Explain the concept of Software-Defined Radio (SDR).",
    answer: "Software-Defined Radio (SDR) is a radio communication system where components traditionally implemented in hardware (e.g., mixers, filters, amplifiers, modulators/demodulators) are instead implemented using software on a computer or embedded system.\n\nThe basic SDR architecture consists of a minimal hardware front-end (antenna, RF amplifier, ADC/DAC) connected to a general-purpose processor that executes signal processing software.\n\nKey advantages of SDR include:\n1. Flexibility: Can support multiple radio protocols through software updates without hardware changes.\n2. Upgradability: New features and standards can be implemented via software updates.\n3. Reduced hardware complexity: Fewer specialized components are needed.\n4. Multiple functionality: A single device can function as different types of radios.\n\nApplications include cognitive radio, military communications, amateur radio, cellular base stations, and research in communications technologies.",
    field: "ECE",
    level: "Advanced"
  },
  {
    id: "ece-7",
    question: "What is the Shannon-Hartley theorem and why is it important?",
    answer: "The Shannon-Hartley theorem is a fundamental result in information theory that establishes the maximum rate at which information can be transmitted over a communications channel of a specified bandwidth in the presence of noise.\n\nThe theorem is expressed by the formula:\n\nC = B × log₂(1 + S/N)\n\nWhere:\n- C is the channel capacity in bits per second\n- B is the bandwidth of the channel in hertz\n- S is the average received signal power\n- N is the average noise power\n- S/N is the signal-to-noise ratio (SNR)\n\nThe importance of this theorem lies in the fact that it establishes a theoretical upper limit on the information transfer rate in a noisy channel. It guides the design of communication systems by showing that:\n1. Capacity increases linearly with bandwidth\n2. Capacity increases logarithmically with SNR\n3. There is a fundamental trade-off between bandwidth and SNR\n\nThis theorem formed the basis for the development of modern digital communication systems and error-correcting codes.",
    field: "ECE",
    level: "Advanced"
  },
  {
    id: "ece-8",
    question: "What is the difference between combinational and sequential logic circuits?",
    answer: "Combinational logic circuits and sequential logic circuits are two fundamental types of digital logic circuits:\n\nCombinational Logic Circuits:\n1. The output depends solely on the current input values.\n2. They have no memory elements and do not use clock signals.\n3. The output at any time is a function of the present inputs only.\n4. Examples include multiplexers, decoders, adders, and logic gates (AND, OR, NOT).\n\nSequential Logic Circuits:\n1. The output depends not only on the current inputs but also on past inputs (the circuit's state).\n2. They contain memory elements like flip-flops or latches to store state information.\n3. Most sequential circuits use clock signals to synchronize operations.\n4. Examples include counters, registers, state machines, and memory units.\n\nIn essence, combinational circuits perform immediate operations on data, while sequential circuits can store and process data over time, enabling more complex operations that require memory of previous states.",
    field: "ECE",
    level: "Basic"
  }
];

export const eeeQuestions: Question[] = [
  {
    id: "eee-1",
    question: "What is the difference between AC and DC power transmission?",
    answer: "AC (Alternating Current) and DC (Direct Current) power transmission have several key differences:\n\n1. Current Flow: In AC, the direction of current flow reverses periodically, while in DC it flows in one direction only.\n\n2. Voltage Conversion: AC voltage can be easily stepped up or down using transformers, making it efficient for long-distance transmission (higher voltage means lower current and thus lower power loss). DC requires complex electronic converters for voltage transformation.\n\n3. Power Loss: AC transmission experiences losses due to reactance and skin effect, while DC transmission primarily experiences resistive losses.\n\n4. Infrastructure: AC systems dominate power grids worldwide due to historical development and transformer technology, while DC is increasingly used for specific applications like submarine cables, HVDC links, and connecting asynchronous grids.\n\n5. End Use: Most household appliances use AC, though many electronic devices convert AC to DC internally.",
    field: "EEE",
    level: "Basic"
  },
  {
    id: "eee-2",
    question: "Explain the working principle of a transformer.",
    answer: "A transformer is an electrical device that transfers electrical energy between two or more circuits through electromagnetic induction. It works based on the principle of mutual induction discovered by Michael Faraday.\n\nWorking principle:\n1. When AC current flows through the primary winding, it creates a varying magnetic flux in the transformer's core.\n2. This varying magnetic flux induces a voltage in the secondary winding according to Faraday's law of electromagnetic induction.\n3. The ratio of secondary to primary voltage is equal to the ratio of the number of turns in the secondary to the number of turns in the primary winding.\n\nMathematically: Vs/Vp = Ns/Np\nWhere:\n- Vs is the secondary voltage\n- Vp is the primary voltage\n- Ns is the number of turns in the secondary winding\n- Np is the number of turns in the primary winding\n\nTransformers can step up voltage (Ns > Np) or step down voltage (Ns < Np) and are essential components in power transmission and distribution systems.",
    field: "EEE",
    level: "Basic"
  },
  {
    id: "eee-3",
    question: "What are the different types of electric motors and their applications?",
    answer: "Electric motors convert electrical energy into mechanical energy and are classified into two main categories: AC motors and DC motors.\n\nDC Motors:\n1. Brushed DC Motors: Simple control, used in toys, small appliances, and automotive applications.\n2. Brushless DC Motors (BLDC): Higher efficiency, used in computer fans, drones, and electric vehicles.\n3. Servo Motors: Precise position control, used in robotics and CNC machines.\n4. Stepper Motors: Precise angular movement, used in 3D printers and precision positioning systems.\n\nAC Motors:\n1. Induction Motors (Asynchronous):\n   - Single-phase: Used in household appliances, fans, and small tools.\n   - Three-phase: Used in industrial applications, pumps, compressors, and conveyor systems.\n2. Synchronous Motors: Constant speed regardless of load, used in precise timing applications, clocks, and large industrial applications.\n3. Universal Motors: Can operate on AC or DC, used in vacuum cleaners, blenders, and power tools.\n\nSpecial Motors:\n1. Linear Motors: Direct linear motion without conversion mechanisms, used in maglev trains and advanced manufacturing.\n2. Reluctance Motors: Simple and robust, used in applications requiring variable speed control.",
    field: "EEE",
    level: "Intermediate"
  },
  {
    id: "eee-4",
    question: "Explain the concept of power factor correction and its importance.",
    answer: "Power factor is the ratio of real power (kW) to apparent power (kVA) in an electrical system. It's a measure of how effectively electrical power is being used, with a value between 0 and 1.\n\nPower factor correction involves improving a low power factor, typically by adding capacitors to the system. This is important for several reasons:\n\n1. Reduced Electricity Bills: Many utilities charge penalties for low power factor. Correction reduces apparent power and thus overall electricity costs.\n\n2. Increased System Capacity: With improved power factor, the same infrastructure can deliver more useful power, increasing capacity without upgrading equipment.\n\n3. Reduced Line Losses: Higher power factor means lower current for the same power delivery, reducing I²R losses in transmission lines.\n\n4. Voltage Improvement: Better power factor leads to improved voltage regulation in the system.\n\n5. Equipment Efficiency: Operating at higher power factor improves the efficiency and life span of equipment.\n\n6. Environmental Benefits: Reduced energy losses mean less generation is needed, lowering environmental impact.\n\nCorrection methods include installing capacitor banks, synchronous condensers, or active power factor correction circuits in electronic equipment.",
    field: "EEE",
    level: "Intermediate"
  },
  {
    id: "eee-5",
    question: "What is a SCADA system and how is it used in power systems?",
    answer: "SCADA (Supervisory Control And Data Acquisition) is a computer-based system used to monitor and control industrial processes and infrastructure. In power systems, SCADA is critical for managing the generation, transmission, and distribution of electricity.\n\nKey components of a power system SCADA include:\n1. Remote Terminal Units (RTUs) and Programmable Logic Controllers (PLCs) at substations and other field locations\n2. Communication infrastructure (fiber optics, radio, satellite, etc.)\n3. Central master station with servers and HMI (Human-Machine Interface)\n4. Software for data acquisition, processing, and control\n\nFunctions in power systems:\n1. Real-time monitoring of voltages, currents, power flows, and equipment status\n2. Remote control of circuit breakers, switches, and other devices\n3. Alarm management for fault conditions\n4. Data logging and historical trending\n5. Load management and demand response\n6. Integration with other systems like Energy Management Systems (EMS) and Distribution Management Systems (DMS)\n7. Support for protection coordination and outage management\n\nSCADA systems enable utilities to operate power grids efficiently, respond quickly to emergencies, balance generation with demand, and maintain reliability and stability across the grid.",
    field: "EEE",
    level: "Advanced"
  },
  {
    id: "eee-6",
    question: "Explain the concept of protective relaying in power systems.",
    answer: "Protective relaying is a critical component of power system protection that automatically detects abnormal conditions and initiates corrective actions to minimize damage and service disruption.\n\nThe primary functions of protective relays include:\n1. Detecting faults and abnormal conditions (overloads, under/over voltage, frequency variations)\n2. Isolating faulty sections while maintaining service to unaffected areas\n3. Minimizing equipment damage and preventing system instability\n4. Ensuring safety of personnel and the public\n\nTypes of protective relays include:\n1. Overcurrent relays: Detect excessive current flow\n2. Distance relays: Measure impedance to locate faults\n3. Differential relays: Compare currents entering and leaving protected zones\n4. Directional relays: Respond to power flow direction\n5. Frequency relays: Monitor system frequency\n6. Voltage relays: Detect under/over voltage conditions\n\nModern protective relaying systems have evolved from electromechanical devices to digital/numerical relays with advanced features such as:\n- Multiple protection functions in one device\n- Self-monitoring and diagnostics\n- Communication capabilities for coordinated protection\n- Event recording and fault analysis\n- Adaptive protection schemes that adjust settings based on system conditions\n\nThe design of protective relaying systems follows principles of reliability, selectivity, speed, and simplicity, often with redundant systems for critical infrastructure.",
    field: "EEE",
    level: "Advanced"
  },
  {
    id: "eee-7",
    question: "What is the significance of grounding in electrical systems?",
    answer: "Grounding in electrical systems refers to connecting conductive elements to earth or a reference point at zero potential. It serves several critical purposes:\n\n1. Safety Protection: Provides a low-impedance path for fault currents to flow, enabling protective devices to operate and disconnect faulty circuits, protecting people from electric shock.\n\n2. Equipment Protection: Prevents dangerous voltages on equipment enclosures and frames during fault conditions, reducing the risk of equipment damage and fires.\n\n3. Overvoltage Protection: Helps dissipate lightning strikes and transient overvoltages, protecting equipment from damage.\n\n4. Reference Potential: Establishes a common reference point (zero potential) for voltage measurements and system operation.\n\n5. Noise Reduction: Properly designed grounding systems can minimize electromagnetic interference (EMI) in sensitive electronic equipment.\n\n6. Stabilizing Voltage Levels: Helps maintain voltage levels within safe limits throughout the system.\n\nCommon grounding systems include:\n- TN Systems: Neutral point of source is directly connected to earth and exposed conductive parts connected to neutral\n- TT Systems: Neutral point is grounded, and exposed conductive parts have separate earth connections\n- IT Systems: Source is either not connected to earth or connected through high impedance, with exposed parts grounded\n\nProper grounding design is essential for electrical safety and system performance and must comply with relevant electrical codes and standards.",
    field: "EEE",
    level: "Intermediate"
  },
  {
    id: "eee-8",
    question: "What are the different methods of starting a three-phase induction motor?",
    answer: "Three-phase induction motors require starting methods to limit the high inrush current and provide adequate starting torque. The main starting methods include:\n\n1. Direct-On-Line (DOL) Starting:\n   - Simplest method: motor connected directly to supply voltage\n   - High starting current (5-7 times rated current)\n   - Used for small motors or where power supply can handle high starting current\n\n2. Star-Delta Starting:\n   - Motor windings initially connected in star configuration, then switched to delta\n   - Reduces starting current to about 1/3 of DOL starting current\n   - Also reduces starting torque to about 1/3\n   - Commonly used for motors above 5 HP\n\n3. Auto-transformer Starting:\n   - Uses an auto-transformer to reduce voltage during starting\n   - Starting current and torque proportional to square of applied voltage\n   - More expensive but provides better control than star-delta\n\n4. Soft Starter:\n   - Electronic device that gradually increases voltage to the motor\n   - Controls starting current and torque smoothly\n   - Reduces mechanical stress on motor and driven equipment\n   - Programmable acceleration/deceleration profiles\n\n5. Variable Frequency Drive (VFD):\n   - Changes both frequency and voltage to control motor speed\n   - Provides optimal starting conditions with controlled current\n   - Offers speed control during operation\n   - Most expensive but most versatile option\n   - Provides energy savings during operation\n\nThe choice of starting method depends on factors like motor size, load characteristics, power supply limitations, and cost considerations.",
    field: "EEE",
    level: "Basic"
  }
];

export const generalQuestions: Question[] = [
  {
    id: "gen-1",
    question: "What are your greatest strengths and weaknesses?",
    answer: "When answering about strengths, focus on relevant technical and soft skills that align with the job requirements. For example, problem-solving abilities, technical expertise, teamwork, adaptability, or attention to detail.\n\nFor weaknesses, mention a genuine area for improvement, but frame it constructively and discuss steps you're taking to address it. For instance, 'I sometimes get caught up in the details, so I've started using project management tools to help me maintain perspective while still ensuring quality work.'",
    field: "General",
    level: "Basic"
  },
  {
    id: "gen-2",
    question: "Where do you see yourself in five years?",
    answer: "This question assesses your career goals and whether they align with the company's potential growth trajectory. A good answer shows ambition while remaining realistic and relevant to the role.\n\nConsider discussing how you hope to have grown professionally, developed new skills, taken on additional responsibilities, or advanced within the organization. Emphasize your interest in growing with the company and contributing to its success long-term.",
    field: "General",
    level: "Basic"
  },
  {
    id: "gen-3",
    question: "Why should we hire you?",
    answer: "This question provides an opportunity to summarize your qualifications, skills, and unique value proposition. An effective answer connects your abilities directly to the company's needs.\n\nStructure your answer around three key elements:\n1. Your technical skills and qualifications that match the job requirements\n2. Your achievements and track record of success in similar roles or projects\n3. Your soft skills and how they would complement the team and company culture\n\nBack up your claims with specific examples whenever possible, and demonstrate your enthusiasm for the role and company.",
    field: "General",
    level: "Basic"
  },
  {
    id: "gen-4",
    question: "How do you handle conflict in a team environment?",
    answer: "This question assesses your interpersonal skills and ability to navigate workplace challenges. An effective answer demonstrates maturity, communication skills, and a focus on resolution.\n\nOutline a constructive approach to conflict resolution:\n1. Listen actively to understand different perspectives\n2. Focus on the issue rather than personalizing the conflict\n3. Seek common ground and shared goals\n4. Collaborate on finding a solution that addresses everyone's concerns\n5. Follow up to ensure the resolution is working\n\nProviding a brief example of how you've successfully resolved a conflict in the past can strengthen your answer.",
    field: "General",
    level: "Intermediate"
  }
];

export const getAllInterviewQuestions = (): Question[] => {
  return [...cseQuestions, ...eceQuestions, ...eeeQuestions, ...generalQuestions];
};
