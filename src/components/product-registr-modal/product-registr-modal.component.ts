import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-registr-modal',
  templateUrl: './product-registr-modal.component.html',
  styleUrls: ['./product-registr-modal.component.scss'],
})
export class ProductRegistrModalComponent {
  @Input() isFormModalOpen = false;
  @Output() onClose = new EventEmitter<boolean>();

  form = { name: '', phoneNumber: '', email: '' };

  closeModal() {
    this.onClose.emit(false);

    alert(
      `Thanks for your interest, ${this.form.name}. We'll call you soon on your phone number ${this.form.phoneNumber}! Also we sent you email about your order on ${this.form.email}`
    );
  }
}
