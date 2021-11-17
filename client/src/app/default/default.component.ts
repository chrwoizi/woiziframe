import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  isInFullscreen = false;
  cursor: string = 'none';
  timeout?: any;

  toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }

  @HostListener('document:fullscreenchange')
  private onFullscreenchange() {
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
}
