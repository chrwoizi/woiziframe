import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
})
export class DefaultComponent {
  isInFullscreen = false;

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
}
