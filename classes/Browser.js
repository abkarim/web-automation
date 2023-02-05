import puppeteer from 'puppeteer-core';
import os from 'os';

class Browser {
  #browser = null;
  #page = null;
  #arguments = ['--disable-infobars', '--start-maximized'];

  constructor() {
    if (os.type() === 'Linux') {
      this.#executablePath = `/opt/google/chrome/chrome`;
      this.#userDataDirectory = `/home/${os.userInfo.username}/.config/google-chrome/`;
    } else {
      this.#executablePath =
        'C:/Program Files/Google/Chrome/Application/chrome.exe';
      this.#userDataDirectory = `C:/Users/${
        os.userInfo().username
      }/AppData/Local/Google/Chrome/User Data`;
    }
  }

  /**
   * Configure browser
   */
  async #configure() {
    this.#browser = await puppeteer.launch({
      headless: false,
      executablePath: this.#executablePath,
      userDataDir: this.#userDataDirectory,
      args: this.#arguments,
      ignoreDefaultArgs: ['--enable-automation'],
      defaultViewport: null, // Reset windows size
    });

    this.#page = (await this.#browser.pages())[0];
    await this.#page.bringToFront();
  }

  async #reloadPage() {
    await this.#page.reload({
      waitUntil: 'networkidle2',
    });
    await this.#waitForNetWorkIdle();
    this.#pageReloaded = true;
  }

  /**
   * Wait for network idle
   * necessary when page interact with internet
   */
  async #waitForNetWorkIdle() {
    await this.#page.waitForNetworkIdle({
      networkIdleTimeout: this.#networkIdleTimeout,
      networkIdleInflight: 0,
    });
  }
}
