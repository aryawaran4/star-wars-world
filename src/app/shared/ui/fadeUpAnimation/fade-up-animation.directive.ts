import { isPlatformBrowser } from '@angular/common';
import { Directive, ElementRef, Renderer2, HostBinding, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[fadeUpAnimation]',
  standalone: true
})
export class FadeUpAnimationDirective implements AfterViewInit {
  @HostBinding('class.opacity-0') initialOpacity = true;

  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2,
    @Inject(PLATFORM_ID) private _platformId: Object,
  ) { }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this._platformId)) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this._renderer.addClass(this._el.nativeElement, 'animate-fade-up');
            this._renderer.removeClass(this._el.nativeElement, 'opacity-0');
          }
        });
      });

      observer.observe(this._el.nativeElement);
    }
  }
}
