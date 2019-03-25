import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../../../public/services/data.service';
import { DateFormatService } from 'src/app/shared/sevices/date-format.service';

@Component({
  selector: 'app-abook-dialog',
  templateUrl: './abook-dialog.component.html',
  styleUrls: ['./abook-dialog.component.scss']
})
export class AbookDialogComponent implements OnInit {
  selectedImage: File;
  selectedPDf: File;
  selectedMP3: File;
  bookForm: FormGroup;
  constructor(private fb: FormBuilder, private service: DataService, private dateFormat: DateFormatService) { }

  ngOnInit() {
    this.bookForm = this.fb.group({
      'name': ['', Validators.required],
      'author': ['', Validators.required],
      'publisher': ['', Validators.required],
      'publish_date': ['', Validators.required],
      'summary': ['', Validators.required]
    });
  }
  uploadImage(event) {
    this.selectedImage = event.srcElement.files[0];
  }
  uploadPDF(event) {
    this.selectedPDf = event.srcElement.files[0];
  }
  uploadMP3(event) {
    this.selectedMP3 = event.srcElement.files[0];
  }

  uploadFile() {
    const formData = new FormData();
    formData.append('image', this.selectedImage, this.selectedImage.name);
    formData.append('pdf', this.selectedPDf, this.selectedPDf.name);
    formData.append('mp3', this.selectedMP3, this.selectedMP3.name);
    return formData;
  }


  save(value) {
/*     let data = this.uploadFile();

    this.service.uploadFile(data).subscribe(res => {
      console.log("Respnse: ", res);
    }) */
    let newDate = this.dateFormat.format(value.publish_date);
    value.publish_date = newDate;
console.log("data: ", value)
    if (this.bookForm.valid) {
      this.service.postBooks(value).subscribe(
        res => { console.log("Book registered successfully!", res) },
        err => { console.log("Error while registering book!"), err }
      )
    } else {
      console.log("Provided data is not valid, please check");
    }
  }

}
