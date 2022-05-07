import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/types';

function getRandomInteger(min: number, max: number) {
  const randomNumber = Math.random();
  return randomNumber * (max - min + 1) + min - randomNumber;
}

@Component({
  selector: 'app-product-details-modal',
  templateUrl: './product-details-modal.component.html',
  styleUrls: ['./product-details-modal.component.scss'],
})
export class ProductDetailsModalComponent {
  @Output() onClose = new EventEmitter<null>();
  @Input() product: Product | null = null;

  isFormModalVisible = false;

  changeFormModalVisibility(isOpen: boolean) {
    this.isFormModalVisible = isOpen;
  }

  placemark: [number, number] = [
    this.getRandomMoscowLatitude,
    this.getRandomMoscowLongitude,
  ];

  get getRandomMoscowLatitude(): number {
    return getRandomInteger(55.503, 55.917);
  }
  get getRandomMoscowLongitude(): number {
    return getRandomInteger(37.329, 37.895);
  }

  closeModal() {
    this.onClose.emit(null);

    this.placemark = [
      this.getRandomMoscowLatitude,
      this.getRandomMoscowLongitude,
    ];
  }
}
