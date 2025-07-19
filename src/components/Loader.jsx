import { useEffect } from "react";
import gsap from "gsap";
import "./loader.css";

const Loader = () => {
  useEffect(() => {
    const TerminalEmulator = {
      init: function (screen) {
        const inst = Object.create(this);
        inst.screen = screen;
        inst.createInput();
        return inst;
      },

      createInput: function () {
        const inputField = document.createElement("div");
        const inputWrap = document.createElement("div");
        inputField.className = "terminal_emulator__field";
        inputField.innerHTML = "";
        inputWrap.appendChild(inputField);
        this.screen.appendChild(inputWrap);
        this.field = inputField;
        this.fieldwrap = inputWrap;
      },

      enterInput: function (input) {
        return new Promise((resolve) => {
          const randomSpeed = (max, min) =>
            Math.random() * (max - min) + min;
          let speed = randomSpeed(50, 70);
          let i = 0;
          let str = "";
          const type = () => {
            str += input[i];
            this.field.innerHTML = str.replace(/ /g, "&nbsp;");
            i++;
            setTimeout(() => {
              if (i < input.length) {
                if (i % 5 === 0) speed = randomSpeed(50, 70);
                type();
              } else {
                setTimeout(() => resolve(), 200);
              }
            }, speed);
          };
          type();
        });
      },

      enterCommand: function () {
        return new Promise((resolve) => {
          const resp = document.createElement("div");
          resp.className = "terminal_emulator__command";
          resp.innerHTML = this.field.innerHTML;
          this.screen.insertBefore(resp, this.fieldwrap);
          this.field.innerHTML = "";
          resolve();
        });
      },

      enterResponse: function (response) {
        return new Promise((resolve) => {
          const resp = document.createElement("div");
          resp.className = "terminal_emulator__response";
          resp.innerHTML = response;
          this.screen.insertBefore(resp, this.fieldwrap);
          resolve();
        });
      },

      wait: function (time, busy = true) {
        return new Promise((resolve) => {
          if (busy) this.field.classList.add("waiting");
          else this.field.classList.remove("waiting");
          setTimeout(() => resolve(), time);
        });
      },

      reset: function () {
        return new Promise((resolve) => {
          this.field.classList.remove("waiting");
          resolve();
        });
      },
    };

    const screen = document.getElementById("screen");
    const TE = TerminalEmulator.init(screen);

    TE.wait(500, false)
      .then(TE.enterInput.bind(TE, "loading website..."))
      .then(TE.enterCommand.bind(TE))
      .then(TE.enterResponse.bind(TE, "Initializing modules..."))
      .then(TE.wait.bind(TE, 800))
      .then(TE.enterResponse.bind(TE, "Connecting to server..."))
      .then(TE.wait.bind(TE, 500))
      .then(TE.enterResponse.bind(TE, "Fetching resources..."))
      .then(TE.wait.bind(TE, 500))
      .then(TE.enterResponse.bind(TE, "Almost there..."))
      .then(TE.wait.bind(TE, 800))
      .then(
        TE.enterResponse.bind(TE, "Welcome to Jonathan Geisler website!")
      )
      .then(TE.wait.bind(TE, 1000))
      .then(() => {
        // Show logo image in the terminal
        const logo = document.createElement("img");
        logo.src = "/logo.png"; // Replace with your logo's path
        logo.className = "terminal-logo";
        screen.appendChild(logo);

        // Animate logo (scale up and fade out)
        gsap.fromTo(
          logo,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1 }
        );
        gsap.to(logo, { scale: 2, opacity: 0, duration: 1, delay: 1.5 });

        // Fade out loader after logo animation
        gsap.to(".loader", { opacity: 0, duration: 0.8, delay: 2.5 });
      });
  }, []);

  return (
    <div className="loader">
      <div className="terminal-container">
        <div className="terminal-titlebar">
          <span className="title">Windows PowerShell</span>
          <div className="window-controls">
            <span>─</span>
            <span>□</span>
            <span>×</span>
          </div>
        </div>
        <div id="screen" className="terminal-screen"></div>
      </div>
    </div>
  );
};

export default Loader;
