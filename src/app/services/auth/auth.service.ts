import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, User } from 'firebase/auth';
import { getDatabase, ref, onValue, set, push, update } from 'firebase/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: any;

  constructor(private router: Router) { 
    const auth = getAuth();
    const db = getDatabase();
    auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        onValue(ref(db, `users/${user.uid}`), (snapshot) => {
          this.user = snapshot.val();
        });
      } else {
        this.user = null;
      }
    });
  }

  login(form:any){
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.value.Username, form.value.Password)
    .then((userCredential: { user: any; }) => {
      // User signed in successfully
      const user = userCredential.user;
      // TODO: redirect the user to the appropriate page
      this.router.navigate(['/home']);
    })
    .catch((error: any) => {
      // Handle errors here
      alert("Invalid username or password!");
    });
  
  }

  logout(){
    const auth = getAuth();
    auth.signOut().then(() => {
      // Sign-out successful.
      console.log('User signed out successfully.');
      // TODO: Redirect the user to the appropriate page
    }).catch((error) => {
      // An error happened.
      console.error(error);
    });
  }
  signup(form:any){

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.value.Email, form.value.Password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
  
        // Store additional user data in the Realtime Database
        const database = getDatabase();
        const userDataRef = ref(database, `users/${user.uid}`);
        const userData = {
          name: form.value.FirstName + " " + form.value.LastName,
          email: form.value.Email,
          isAdmin: form.value.Type,
          cart: null  // Initialize the cart reference to null
        };
        set(userDataRef, userData);
  
        // Create a new shopping cart for the user
        const cartDataRef = push(ref(database, `carts`)); // Generate a unique key for the cart
        const cartData = {
          userId: user.uid,
          items: []
        };
        set(cartDataRef, cartData);
  
        // Update the user data with the cart reference
        const cartRef = ref(database, `carts/${cartDataRef.key}`);
        update(userDataRef, {cart: cartRef});
  
        console.log(user);
        // TODO: redirect the user to the appropriate page
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
    }
  

  
}
