import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PhotoComponent } from '../photo/photo.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  isInFullscreen = false;
  cursor: string = 'none';
  timeout?: any;
  showFullScreenButton = environment.showFullScreenButton;
  showCloseButton = environment.showCloseButton;
  @ViewChild('photo') photo!: PhotoComponent;

  close() {
    window.close();
  }

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  @HostListener('document:fullscreenchange')
  onFullscreenchange() {
    this.isInFullscreen = !!document.fullscreenElement;
  }

  onMouseMove() {
    this.cursor = 'default';
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    this.timeout = setTimeout(() => {
      this.cursor = 'none';
    }, 1000);
  }

  onClick($event: { clientX: any; }) {
    const x = $event.clientX;
    const isClickOnRight = x > window.innerWidth * 0.5;
    if (isClickOnRight) {
      this.photo.nextItemNow();
    } else {
      if (!this.showFullScreenButton) {
        this.toggleFullScreen();
      }
    }
  }
}
