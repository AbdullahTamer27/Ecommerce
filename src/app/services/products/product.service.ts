import { EventEmitter, Injectable, Output } from '@angular/core';
import axios from 'axios';
import { PortService } from '../port/port.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  isSearch: boolean = false;
  products: any;

  @Output() getProducts: EventEmitter<any> = new EventEmitter();
  @Output() getProduct: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService, private portService: PortService) { }

  create(product: any) {
    axios.post(`http://localhost:${this.portService.port}/product/add`,
      {
        sellerId: this.authService.user.id,
        category: product.category,
        name: product.title,
        imageUrl: product.image,
        price: product.price,
        description: product.discription,
        productType: product.type,
        quantity: product.quantity
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      });

    /* Local Storage Code
    localStorage.setItem("userKey", JSON.stringify(this.user));
    this.router.navigate(['/home']);
  */


  }

  getAll() {

    axios.get(`http://localhost:${this.portService.port}/product/all`, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        // console.log(response.data);
        this.products = response.data;
        this.getProducts.emit(this.products);
      })
      .catch(error => {

      });
    /*
       Local Storage Code
      localStorage.setItem("userKey", JSON.stringify(this.user));
      this.router.navigate(['/home']);
    */
  }


  getProductBySellerId(sellerID: any) {
    axios.post(`http://localhost:${this.portService.port}/product/getByUserID`,
      {
        sellerID: sellerID
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        this.products = response.data;
        this.getProducts.emit(this.products);
      })
      .catch(error => {
        console.log(error);
      });
  }



  getByCategory(cat: string) {

    axios.post(`http://localhost:${this.portService.port}/product/categorize`, { category: cat }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        // console.log(response.data);
        this.products = response.data;
        this.getProducts.emit(this.products);
      })
      .catch(error => {

      });
    /*
       Local Storage Code
      localStorage.setItem("userKey", JSON.stringify(this.user));
      this.router.navigate(['/home']);
    */
  }

  get(productId: any) {

    axios.post(`http://localhost:${this.portService.port}/product/get`, { productId: productId }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data);
        this.getProduct.emit(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    /* Local Storage Code
    localStorage.setItem("userKey", JSON.stringify(this.user));
    this.router.navigate(['/home']);
  */


  }

  update(product: any, productId: any) {
    axios.post(`http://localhost:${this.portService.port}/product/update`,
      {
        productId: productId,
        category: product.category,
        name: product.name,
        imageUrl: product.imageUrl,
        price: product.price,
        description: product.description,
        productType: product.productType,
        quantity: product.quantity
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {

      })
      .catch(error => {

      });

    /* Local Storage Code
    localStorage.setItem("userKey", JSON.stringify(this.user));
    this.router.navigate(['/home']);
  */


  }

  delete(productId: any) {

    axios.post(`http://localhost:${this.portService.port}/product/remove`,
      {
        productId: productId
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      });

    /* Local Storage Code
    localStorage.setItem("userKey", JSON.stringify(this.user));
    this.router.navigate(['/home']);
  */


  }
  search(form: any) {
    axios.post(`http://localhost:${this.portService.port}/product/search`, { keyword: form.value.search }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response);
        if (response.status == 201) {
          this.products = response.data;
          this.getProducts.emit(this.products);
        } else {
          alert(response);
        }
      })
      .catch(error => {
        alert("asfgrhrtshtaewgkbhdskhg");
      });

    /* Local Storage Code
    localStorage.setItem("userKey", JSON.stringify(this.user));
    this.router.navigate(['/home']);
  */

  }

  filterByPrice(value: any) {
    axios.post(`http://localhost:${this.portService.port}/product/filterByPrice`,
      {
        value: value
      }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => {
        console.log(response);
        this.getProducts.emit(response.data);
      })
      .catch(error => {
        alert("asfgrhrtshtaewgkbhdskhg");
      });
  }
}