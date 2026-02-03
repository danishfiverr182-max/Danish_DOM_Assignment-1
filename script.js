    document.getElementById("heading").innerText = "Welcome to JavaScript DOM";

    let step = 0;

    function reply() {
      const para = document.getElementById("para");

      if (step === 0) {
        para.innerHTML =
          "<strong>Sir:</strong> I am doing great and in good health. " +
          "<strong>(Click reply button for student response)</strong>";
        step++;
      } else {
        para.innerHTML =
          "<strong>Student:</strong> I am pleased to hear sir you are doing great. " +
          "As you can see Sir, <strong>Task 2 \"Change Paragraph Text on Button Click\"</strong> is working. " +
          "Now you can move on to <strong>Task 3 \"Change Background Color on Button Click\"</strong>. " +
          "Click on <strong>\"Change Background Color\"</strong> multiple times and it will change background each time.";
      }
    }

    const backgrounds = [
      "linear-gradient(135deg, #ff9a9e, #fad0c4)",
      "linear-gradient(135deg, #a18cd1, #fbc2eb)",
      "linear-gradient(135deg, #f6d365, #fda085)",
      "linear-gradient(135deg, #84fab0, #8fd3f4)",
      "linear-gradient(135deg, #667eea, #764ba2)"
    ];

    let bgIndex = 0;

    function changeBackground() {
      document.body.style.background = backgrounds[bgIndex];
      bgIndex = (bgIndex + 1) % backgrounds.length;
    }

    function showAlert() {
      alert(
        "Sir you can see Task 4 \"Show Alert Message on Button Click\" DOM is working! " +
        "You can now move to Task 5."
      );
    }

    function updateText() {
      const value = document.getElementById("userInput").value;
      document.getElementById("output").innerText = value;
    }