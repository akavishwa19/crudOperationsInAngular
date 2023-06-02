import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ApiService} from "../services/api.service";
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit{

  freshnesslist=["brand new","second-hand","refurbished"]

  productForm!:FormGroup;

  constructor(private formbuilder:FormBuilder,private api:ApiService) {
  }

  ngOnInit() {
    this.productForm=this.formbuilder.group({
      productName:['',Validators.required],
      category:['',Validators.required],
      freshness:['',Validators.required],
      price:['',Validators.required],
      comments:['',Validators.required],
      date:['',Validators.required],

    })
  }

  addProducts(){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value).subscribe({
        next:(res)=>{
          Swal.fire("submitted succesfully ")
        },
        error:()=>{
          Swal.fire("error while adding the product")
        }
      })
    }
  }


}
