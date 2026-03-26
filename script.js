// Questions Bank
const rawQuestions =  [
{
  question: "What is an Operating System?",
  options: ["Application software","System software","Programming language","Compiler"],
  answer: "System software"
},
{
  question: "A process is",
  options: ["Program in disk","Program in execution","Program compiled","Program in ROM"],
  answer: "Program in execution"
},
{
  question: "PCB stands for",
  options: ["Process Control Block","Program Control Block","Process Code Block","Program Code Block"],
  answer: "Process Control Block"
},
{
  question: "The smallest unit of execution is",
  options: ["Process","Thread","Program","File"],
  answer: "Thread"
},
{
  question: "Which OS allows multiple users at the same time?",
  options: ["Batch OS","Multi-user OS","Single user OS","Real-time OS"],
  answer: "Multi-user OS"
},
{
  question: "Batch OS executes",
  options: ["Programs randomly","Jobs in groups","Programs in parallel","Files sequentially"],
  answer: "Jobs in groups"
},
{
  question: "Spooling mainly uses",
  options: ["RAM","Disk","CPU","Cache"],
  answer: "Disk"
},
{
  question: "Buffering temporarily stores data in",
  options: ["RAM","Disk","CPU","Register"],
  answer: "RAM"
},
{
  question: "Multiprogramming improves",
  options: ["CPU utilization","Disk speed","Network speed","RAM size"],
  answer: "CPU utilization"
},
{
  question: "Which scheduling algorithm executes processes in arrival order?",
  options: ["SJF","FCFS","Round Robin","Priority"],
  answer: "FCFS"
},
{
  question: "Which algorithm gives minimum average waiting time?",
  options: ["SJF","FCFS","Round Robin","Priority"],
  answer: "SJF"
},
{
  question: "Round Robin scheduling uses",
  options: ["Priority","Time quantum","Disk speed","Memory size"],
  answer: "Time quantum"
},
{
  question: "Context switching means",
  options: ["Process creation","CPU switching between processes","Process deletion","Memory allocation"],
  answer: "CPU switching between processes"
},
{
  question: "Throughput means",
  options: ["Number of completed processes","Waiting time","CPU idle time","Response time"],
  answer: "Number of completed processes"
},
{
  question: "Waiting time means",
  options: ["Time spent in ready queue","CPU execution time","Disk time","Response time"],
  answer: "Time spent in ready queue"
},
{
  question: "Response time means",
  options: ["Time to first response","Completion time","CPU time","Waiting time"],
  answer: "Time to first response"
},
{
  question: "Semaphore is used for",
  options: ["Memory allocation","Process synchronization","File management","Disk scheduling"],
  answer: "Process synchronization"
},
{
  question: "Binary semaphore values are",
  options: ["0 and 1","0 to 10","1 to 100","-1 to 1"],
  answer: "0 and 1"
},
{
  question: "IPC stands for",
  options: ["Inter Process Communication","Internal Program Control","Input Process Control","Internal Process Communication"],
  answer: "Inter Process Communication"
},
{
  question: "Deadlock occurs when",
  options: ["Processes wait forever for resources","CPU stops","Disk fails","Memory overflow"],
  answer: "Processes wait forever for resources"
},
{
  question: "How many conditions are required for deadlock?",
  options: ["2","3","4","5"],
  answer: "4"
},
{
  question: "Which is a deadlock condition?",
  options: ["Mutual exclusion","Circular wait","Hold and wait","All of these"],
  answer: "All of these"
},
{
  question: "Banker's algorithm is used for",
  options: ["Deadlock prevention","Deadlock avoidance","Deadlock detection","Process scheduling"],
  answer: "Deadlock avoidance"
},
{
  question: "Fragmentation means",
  options: ["Wasted memory space","Memory allocation","CPU scheduling","Disk failure"],
  answer: "Wasted memory space"
},
{
  question: "External fragmentation occurs when",
  options: ["Free memory is scattered","Memory block is larger than required","CPU idle","Disk error"],
  answer: "Free memory is scattered"
},
{
  question: "Paging divides memory into",
  options: ["Pages and frames","Segments and blocks","Files and folders","Tracks and sectors"],
  answer: "Pages and frames"
},
{
  question: "Segmentation divides program into",
  options: ["Logical parts","Blocks","Pages","Frames"],
  answer: "Logical parts"
},
{
  question: "Virtual memory uses",
  options: ["Disk as extra memory","CPU as memory","Cache as disk","RAM as disk"],
  answer: "Disk as extra memory"
},
{
  question: "Demand paging loads pages",
  options: ["When required","At program start","Randomly","After execution"],
  answer: "When required"
},
{
  question: "When required page is not in memory",
  options: ["Page hit occurs","Page fault occurs","Disk crash occurs","CPU failure"],
  answer: "Page fault occurs"
},
{
  question: "Page replacement is needed when",
  options: ["Memory is full","Disk is full","CPU busy","RAM empty"],
  answer: "Memory is full"
},
{
  question: "FIFO page replacement means",
  options: ["First page removed first","Last page removed","Random page removed","New page removed"],
  answer: "First page removed first"
},
{
  question: "LRU stands for",
  options: ["Least Recently Used","Last Random Use","Longest Running Unit","Least Resource Usage"],
  answer: "Least Recently Used"
},
{
  question: "Which page replacement algorithm is best theoretically?",
  options: ["FIFO","Optimal","LRU","Random"],
  answer: "Optimal"
},
{
  question: "Thrashing occurs when",
  options: ["Too many page faults","CPU idle","Disk failure","Network slow"],
  answer: "Too many page faults"
},
{
  question: "Disk scheduling is used to",
  options: ["Decide order of disk requests","Manage memory","Schedule CPU","Allocate files"],
  answer: "Decide order of disk requests"
},
{
  question: "Disk performance parameter includes",
  options: ["Seek time","Rotational latency","Transfer time","All of these"],
  answer: "All of these"
},
{
  question: "Seek time means",
  options: ["Time for disk head movement","Time for CPU execution","File reading time","RAM allocation"],
  answer: "Time for disk head movement"
},
{
  question: "FIFO disk scheduling serves requests",
  options: ["In arrival order","Closest request first","Random order","Reverse order"],
  answer: "In arrival order"
},
{
  question: "SSTF stands for",
  options: ["Shortest Seek Time First","Shortest Service Time First","System Seek Transfer First","Small Seek Time Function"],
  answer: "Shortest Seek Time First"
},
{
  question: "SSTF selects",
  options: ["Closest disk request","First request","Last request","Random request"],
  answer: "Closest disk request"
},
{
  question: "SCAN algorithm is also called",
  options: ["Elevator algorithm","Circular algorithm","Random algorithm","Queue algorithm"],
  answer: "Elevator algorithm"
},
{
  question: "File management means",
  options: ["Managing files on storage","CPU scheduling","Memory allocation","Disk repair"],
  answer: "Managing files on storage"
},
{
  question: "Which is a file operation?",
  options: ["Create","Read","Write","All of these"],
  answer: "All of these"
},
{
  question: "Sequential access means",
  options: ["Access data one by one","Random access","Direct access","Block access"],
  answer: "Access data one by one"
},
{
  question: "Direct access means",
  options: ["Access any location directly","Sequential reading","Disk scanning","Random scheduling"],
  answer: "Access any location directly"
},
{
  question: "Contiguous allocation stores files",
  options: ["Continuously","Randomly","Linked blocks","Indexed blocks"],
  answer: "Continuously"
},
{
  question: "Linked allocation uses",
  options: ["Pointers","Index blocks","Frames","Pages"],
  answer: "Pointers"
},
{
  question: "Indexed allocation uses",
  options: ["Index block","Pointers","Continuous blocks","Random blocks"],
  answer: "Index block"
},
{
  question: "Directory is used to",
  options: ["Organize files","Schedule CPU","Allocate memory","Manage network"],
  answer: "Organize files"
},
{
  question: "Single-level directory stores",
  options: ["All files in one directory","Files in many directories","Files in memory","Files in disk blocks"],
  answer: "All files in one directory"
},
{
  question: "Two-level directory means",
  options: ["Separate directory for each user","Two files only","Two processes","Two disks"],
  answer: "Separate directory for each user"
},
{
  question: "Tree directory structure is",
  options: ["Hierarchical","Linear","Circular","Random"],
  answer: "Hierarchical"
},
{
  question: "Disk platter is",
  options: ["Circular disk surface","CPU chip","RAM block","Disk head"],
  answer: "Circular disk surface"
},
{
  question: "Track is",
  options: ["Circular path on disk","Disk surface","Disk head","Memory block"],
  answer: "Circular path on disk"
},
{
  question: "Sector is",
  options: ["Smallest disk storage unit","Disk head","Disk track","File"],
  answer: "Smallest disk storage unit"
},
{
  question: "Cylinder is",
  options: ["Collection of tracks","Disk head","RAM block","File block"],
  answer: "Collection of tracks"
},
{
  question: "Disk head reads data from",
  options: ["Disk surface","CPU","RAM","Network"],
  answer: "Disk surface"
},
{
  question: "Belady’s anomaly occurs in",
  options: ["FIFO","LRU","Optimal","SSTF"],
  answer: "FIFO"
},
{
  question: "Best page replacement algorithm theoretically",
  options: ["Optimal","FIFO","LRU","Random"],
  answer: "Optimal"
}
];
 



// Shuffle function
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

let quizQuestions = [];

function initQuiz() {
    quizQuestions = JSON.parse(JSON.stringify(rawQuestions));

    shuffle(quizQuestions);

    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    quizQuestions.forEach((q, index) => {
        q.id = index + 1; // ✅ ADD ID

        shuffle(q.options);

        const card = document.createElement('div');
        card.className = 'question-card';

        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = `${index + 1}. ${q.question}`; // ✅ FIX
        card.appendChild(title);

        q.options.forEach(opt => { // ✅ FIX
            const label = document.createElement('label');
            label.className = 'option-label';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${q.id}`;
            radio.value = opt;

            label.appendChild(radio);
            label.appendChild(document.createTextNode(' ' + opt));

            card.appendChild(label);
        });

        container.appendChild(card);
    });
}

document.getElementById('submit-btn').addEventListener('click', () => {
    let score = 0;
    let userAnswers = {};

    quizQuestions.forEach(q => {
        const selected = document.querySelector(`input[name="question-${q.id}"]:checked`);
        
        if (selected) {
            userAnswers[q.id] = selected.value;

            if (selected.value === q.answer) { // ✅ FIX
                score++;
            }
        } else {
            userAnswers[q.id] = null;
        }
    });

    const sessionData = {
        score: score,
        total: quizQuestions.length,
        userAnswers: userAnswers,
        shuffledQuestions: quizQuestions
    };

    localStorage.setItem('ecet_current_session', JSON.stringify(sessionData));

    window.location.href = 'result.html';
});

window.onload = initQuiz;
