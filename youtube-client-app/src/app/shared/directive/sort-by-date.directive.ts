import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSortByDate]'
})
export class SortByDateDirective {
  @Input() private appSortByDate: string;

  private date: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  private changeColorForBorder(): void {
    let publishDate: number = Date.parse(this.date);
    let differenceOfTime: number = Date.now() - publishDate;
    let differenceOfDays: number = Math.round(differenceOfTime / 60000 / 60 / 24);
    switch (true) {
      case differenceOfDays > 180:
        this.renderer.setStyle(this.el.nativeElement, 'border-bottom-color', 'red');
        break;

      case differenceOfDays < 30 && differenceOfDays >= 7:
        this.renderer.setStyle(this.el.nativeElement, 'border-bottom-color', 'green');
        break;

      case differenceOfDays < 7:
        this.renderer.setStyle(this.el.nativeElement, 'border-bottom-color', 'blue');
        break;

      default:
        this.renderer.setStyle(this.el.nativeElement, 'border-bottom-color', 'yellow');
        break;
    }
  }

  public ngOnChanges(): void {
    this.date = this.appSortByDate;
    this.changeColorForBorder();
  }
}
