const questions = [
  {
    Question: "Who created Bitcoin?",
    options: [
      "Vitalik Buterin",
      "Satoshi Nakamoto",
      "Elon Musk",
      "Charlie Lee",
    ],
    answer: "Satoshi Nakamoto",
  },
  {
    Question: "What is the maximum supply of Bitcoin?",
    options: ["18 Million", "100 Million", "21 Million", "50 Million"],
    answer: "21 Million",
  },
  {
    Question: "What technology is cryptocurrency based on?",
    options: [
      "Cloud Computing",
      "Artificial Intelligence",
      "Blockchain",
      "Machine Learning",
    ],
    answer: "Blockchain",
  },
  {
    Question: 'Which cryptocurrency is known as "Digital Silver"?',
    options: ["Ethereum", "Litecoin", "Ripple", "Dogecoin"],
    answer: "Litecoin",
  },
  {
    Question: 'What does "DeFi" stand for?',
    options: [
      "Digital Finance",
      "Decentralized Finance",
      "Defined Fiat",
      "Direct Finance",
    ],
    answer: "Decentralized Finance",
  },
  {
    Question: "Which blockchain platform introduced smart contracts?",
    options: ["Bitcoin", "Litecoin", "Ethereum", "Monero"],
    answer: "Ethereum",
  },
  {
    Question: "What is the name of Ethereum's native currency?",
    options: ["Ether", "Solana", "Bitcoin", "BNB"],
    answer: "Ether",
  },
  {
    Question: "What is a crypto wallet used for?",
    options: [
      "Mining coins",
      "Storing private keys",
      "Creating blockchains",
      "Printing tokens",
    ],
    answer: "Storing private keys",
  },
  {
    Question: 'What does "NFT" stand for?',
    options: [
      "New Financial Token",
      "Non-Fungible Token",
      "Network Fee Transaction",
      "Null Fiat Transfer",
    ],
    answer: "Non-Fungible Token",
  },
  {
    Question: "What consensus mechanism does Bitcoin use?",
    options: [
      "Proof of Stake",
      "Delegated Proof of Stake",
      "Proof of Work",
      "Proof of Authority",
    ],
    answer: "Proof of Work",
  },
  {
    Question:
      "Which event halves the Bitcoin mining reward approximately every 4 years?",
    options: [
      "Bitcoin Split",
      "Block Reward Cut",
      "The Halving",
      "Supply Burn",
    ],
    answer: "The Halving",
  },
  {
    Question: "What is a blockchain?",
    options: [
      "A centralized database",
      "A distributed ledger of transactions",
      "A type of cryptocurrency",
      "A crypto exchange",
    ],
    answer: "A distributed ledger of transactions",
  },
  {
    Question:
      "Which crypto exchange was one of the largest before collapsing in 2022?",
    options: ["Binance", "Kraken", "FTX", "Coinbase"],
    answer: "FTX",
  },
  {
    Question: 'What is "gas" in the context of Ethereum?',
    options: [
      "A type of token",
      "A fee paid to process transactions",
      "A mining hardware component",
      "A staking reward",
    ],
    answer: "A fee paid to process transactions",
  },
  {
    Question: "What is the term for the first block in a blockchain?",
    options: ["Root Block", "Origin Block", "Genesis Block", "Zero Block"],
    answer: "Genesis Block",
  },
  {
    Question: "Which cryptocurrency uses the ticker symbol XRP?",
    options: ["Ripple", "Ren Protocol", "Render Token", "Reserve Rights"],
    answer: "Ripple",
  },
  {
    Question: "What does HODL mean in crypto culture?",
    options: [
      "Hold On for Dear Life",
      "High Order Digital Ledger",
      "Hands Off Digital Liquidity",
      "Hash Output Data Layer",
    ],
    answer: "Hold On for Dear Life",
  },
  {
    Question:
      "Which network is known for very fast and low-cost transactions, often called an Ethereum rival?",
    options: ["Dogecoin", "Solana", "Litecoin", "Monero"],
    answer: "Solana",
  },
  {
    Question: "What is a stablecoin?",
    options: [
      "A coin with a fixed mining rate",
      "A cryptocurrency pegged to a stable asset like the US dollar",
      "A coin that never loses value",
      "A government-issued digital currency",
    ],
    answer: "A cryptocurrency pegged to a stable asset like the US dollar",
  },
  {
    Question: "What is crypto staking?",
    options: [
      "Selling crypto at a fixed price",
      "Locking up crypto to support a network and earn rewards",
      "Converting crypto to fiat currency",
      "Mining new coins with hardware",
    ],
    answer: "Locking up crypto to support a network and earn rewards",
  },
];

const quizQuestion = document.querySelector(".ammar-quiz-question");
const quizOptions = document.querySelector(".ammar-quiz-options");
const html = document.body;
const btnSubmit = document.querySelector(".submit-btn");

const globalHeader = `<header class="ammar-quiz-app-header">
        <div class="ammar-quiz-app-container">
          <div class="ammar-quiz-app-wrapper">
            <div class="ammar-quiz-app-logo">
              <a href="/main.html">
                <img
                  src="assets/logo.png"
                  alt="Ammar Quiz Web Application Logo"
                />
              </a>
            </div>
            <nav class="ammar-quiz-app-navbar">
              <ul class="ammar-quiz-app-navlist">
                <li class="ammar-quiz-app-navitems">
                  <a href="#" class="ammar-quiz-app-navitem-link">FAQs</a>
                </li>
                <li class="ammar-quiz-app-navitems">
                  <a href="#" class="ammar-quiz-app-navitem-link">Support</a>
                </li>
              </ul>
              <a href="/start.html" class="ammar-quiz-app-btn">Start Test</a>
            </nav>
          </div>
        </div>
      </header>`;
document.body.insertAdjacentHTML("afterbegin", globalHeader);

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let wrongAnswersCount = 0;

const updateQuiz = () => {
  // currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    quizQuestion.textContent = questions[currentQuestionIndex].Question;
    quizOptions.innerHTML = "";
    questions[currentQuestionIndex].options.forEach((option) => {
      const optionElement = document.createElement("li");
      optionElement.classList.add("ammar-quiz-option");
      optionElement.textContent = option;
      quizOptions.appendChild(optionElement);
      optionElement.addEventListener("click", () => {
        const selectedOption = optionElement.textContent;
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (selectedOption === correctAnswer) {
          correctAnswersCount++;
        } else {
          wrongAnswersCount++;
        }
      });
      optionElement.addEventListener("click", () => {
        currentQuestionIndex++;
        updateQuiz();
      });
    });
  } else {
    sessionStorage.setItem("correctAnswers", correctAnswersCount);
    sessionStorage.setItem("wrongAnswers", wrongAnswersCount);
    sessionStorage.setItem("totalQuestions", questions.length);
    window.location.href = "/login.html";
  }
};

if (btnSubmit) {
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    sessionStorage.setItem("correctAnswers", correctAnswersCount);
    sessionStorage.setItem("wrongAnswers", wrongAnswersCount);
    sessionStorage.setItem("totalQuestions", questions.length);
    window.location.href = "/results.html";
  });
}

if (quizQuestion) {
  document.querySelector(".ammar-quiz-question").textContent =
    questions[currentQuestionIndex].Question;
}

if (window.location.pathname.includes("quiz")) {
  updateQuiz();
}

if (window.location.pathname.includes("results")) {
  const correctCount = parseInt(sessionStorage.getItem("correctAnswers")) || 0;
  const wrongCount = parseInt(sessionStorage.getItem("wrongAnswers")) || 0;
  const totalQuestions =
    parseInt(sessionStorage.getItem("totalQuestions")) || questions.length;

  const percentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

  document.getElementById("correctCount").textContent = correctCount;
  document.getElementById("wrongCount").textContent = wrongCount;
  document.getElementById("totalCount").textContent = totalQuestions;
  document.getElementById("scorePercentage").textContent = percentage + "%";
  document.getElementById("progressPercent").textContent = percentage + "%";

  setTimeout(() => {
    document.getElementById("progressFill").style.width = percentage + "%";
  }, 300);

  // Breakdown bars
  const correctBarFill = document.getElementById("correctBarFill");
  const wrongBarFill = document.getElementById("wrongBarFill");
  const correctBarCount = document.getElementById("correctBarCount");
  const wrongBarCount = document.getElementById("wrongBarCount");
  if (correctBarFill && wrongBarFill) {
    const correctPct =
      totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    const wrongPct =
      totalQuestions > 0 ? (wrongCount / totalQuestions) * 100 : 0;
    setTimeout(() => {
      correctBarFill.style.width = correctPct + "%";
      wrongBarFill.style.width = wrongPct + "%";
    }, 400);
    correctBarCount.textContent = correctCount;
    wrongBarCount.textContent = wrongCount;
  }

  // Update score circle gradient based on percentage
  const scoreCircle = document.getElementById("scoreCircle");
  const coneAngle = (percentage / 100) * 360;
  scoreCircle.style.background = `conic-gradient(
    var(--ammar-quiz-main) 0deg,
    var(--ammar-quiz-main) ${coneAngle}deg,
    #e8e8e8 ${coneAngle}deg
  )`;

  // Update performance badge and message
  const performanceBadge = document.getElementById("performanceBadge");
  const performanceText = document.getElementById("performanceText");
  const resultsMessage = document.getElementById("resultsMessage");
  let badge = "Excellent";
  let message =
    "Outstanding performance! You have excellent knowledge about cryptocurrency.";
  let badgeClass = "excellent";

  if (percentage >= 80) {
    badge = "Excellent";
    message =
      "Outstanding performance! You have excellent knowledge about cryptocurrency.";
    performanceBadge.style.background = "var(--ammar-quiz-light)";
    performanceBadge.style.color = "var(--ammar-quiz-contrast)";
  } else if (percentage >= 60) {
    badge = "Good";
    message =
      "Good job! You have a solid understanding of cryptocurrency concepts.";
    performanceBadge.style.background = "#86efac";
    performanceBadge.style.color = "#15803d";
    performanceText.style.color = "#15803d";
  } else if (percentage >= 40) {
    badge = "Fair";
    message =
      "Not bad! Keep practicing to strengthen your cryptocurrency knowledge.";
    performanceBadge.style.background = "#fcd34d";
    performanceBadge.style.color = "#92400e";
    performanceText.style.color = "#92400e";
  } else {
    badge = "Needs Improvement";
    message =
      "Keep learning! Review the concepts and try again to improve your score.";
    performanceBadge.style.background = "#fca5a5";
    performanceBadge.style.color = "#991b1b";
    performanceText.style.color = "#991b1b";
  }

  performanceText.textContent = badge;
  resultsMessage.innerHTML = `<p>${message}</p>`;
}

// ─── Certificate Download ──────────────────────────────
async function downloadCertificate() {
  const { PDFDocument, rgb, StandardFonts } = PDFLib;

  const firstName = sessionStorage.getItem("userFirstName") || "First";
  const lastName = sessionStorage.getItem("userLastName") || "Last";
  const email = sessionStorage.getItem("userEmail") || "";
  const correctCount = parseInt(sessionStorage.getItem("correctAnswers")) || 0;
  const totalQuestions =
    parseInt(sessionStorage.getItem("totalQuestions")) || 20;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const fullName = firstName + " " + lastName;

  const now = new Date();
  const dateStr = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Load the certificate template image
  const imgResponse = await fetch("/assets/certificate.png");
  const imgBytes = await imgResponse.arrayBuffer();

  const pdfDoc = await PDFDocument.create();
  // A4 landscape
  const page = pdfDoc.addPage([841.89, 595.28]);
  const { width, height } = page.getSize();

  // Embed the certificate background image
  const bgImage = await pdfDoc.embedPng(imgBytes);
  page.drawImage(bgImage, { x: 0, y: 0, width, height });

  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  // "Certificate of Completion" is already in the image template
  // "This is presented to :" text is already in the template

  // Recipient name — big, centered, below the "presented to" line
  const nameFontSize = 42;
  const nameWidth = fontBold.widthOfTextAtSize(fullName, nameFontSize);
  page.drawText(fullName, {
    x: (width - nameWidth) / 2,
    y: height * 0.44,
    size: nameFontSize,
    font: fontBold,
    color: rgb(0.15, 0.15, 0.15),
  });

  // Score line
  const scoreLine = `Crypto Knowledge Quiz  —  Score: ${correctCount}/${totalQuestions}  (${percentage}%)`;
  const scoreFontSize = 16;
  const scoreWidth = fontRegular.widthOfTextAtSize(scoreLine, scoreFontSize);
  page.drawText(scoreLine, {
    x: (width - scoreWidth) / 2,
    y: height * 0.33,
    size: scoreFontSize,
    font: fontRegular,
    color: rgb(0.35, 0.35, 0.35),
  });

  // Email
  const emailFontSize = 13;
  const emailWidth = fontRegular.widthOfTextAtSize(email, emailFontSize);
  page.drawText(email, {
    x: (width - emailWidth) / 2,
    y: height * 0.27,
    size: emailFontSize,
    font: fontRegular,
    color: rgb(0.5, 0.5, 0.5),
  });

  // Date bottom-left area
  page.drawText(`Date: ${dateStr}`, {
    x: 110,
    y: 68,
    size: 12,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });

  // Time bottom-right area
  const timeLabel = `Time: ${timeStr}`;
  const timeLabelWidth = fontRegular.widthOfTextAtSize(timeLabel, 12);
  page.drawText(timeLabel, {
    x: width - 110 - timeLabelWidth,
    y: 68,
    size: 12,
    font: fontRegular,
    color: rgb(0.3, 0.3, 0.3),
  });

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Cryptify_Certificate_${firstName}_${lastName}.pdf`;
  a.click();
  URL.revokeObjectURL(url);
}
