/* Reusable quiz widget for Time & Space Complexity lessons.
 *
 * Markup contract:
 *   <div class="quiz" data-answer="1" data-explain="Why the answer is what it is.">
 *     <p class="q">Question text?</p>
 *     <ul>
 *       <li><button class="opt">First option</button></li>
 *       <li><button class="opt">Second option</button></li>
 *       ...
 *     </ul>
 *     <p class="feedback" aria-live="polite"></p>
 *   </div>
 *
 * data-answer is the 0-based index of the correct <button class="opt">.
 * Immediate feedback: marks the chosen button, reveals the correct one,
 * shows the explanation. Retryable until correct.
 */
(function () {
  function wire(quiz) {
    var answer = parseInt(quiz.getAttribute("data-answer"), 10);
    var explain = quiz.getAttribute("data-explain") || "";
    var opts = Array.prototype.slice.call(quiz.querySelectorAll("button.opt"));
    var feedback = quiz.querySelector(".feedback");
    var solved = false;

    opts.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        if (solved) return;
        if (i === answer) {
          solved = true;
          btn.classList.add("correct");
          feedback.innerHTML = "<span class='good'>Correct.</span> " + explain;
        } else {
          btn.classList.add("wrong");
          btn.disabled = true;
          feedback.innerHTML = "<span class='bad'>Not quite.</span> Try again.";
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".quiz").forEach(wire);
  });
})();
