import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lectura',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lectura.component.html',
  styleUrl: './lectura.component.css'
})
export class LecturaComponent {
  speechSynthesisUtterance: SpeechSynthesisUtterance | null = null;

  readWholePage() {
    const text = document.body.innerText;

    if (!text) {
      alert('No hay texto en la página para leer.');
      return;
    }

    this.stopText();

    this.speechSynthesisUtterance = new SpeechSynthesisUtterance(text);
    this.speechSynthesisUtterance.lang = 'es-MX';

    window.speechSynthesis.speak(this.speechSynthesisUtterance);
  }

  pauseText() {
    if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
      window.speechSynthesis.pause();
    }
  }

  resumeText() {
    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }
  }

  stopText() {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  }
}
