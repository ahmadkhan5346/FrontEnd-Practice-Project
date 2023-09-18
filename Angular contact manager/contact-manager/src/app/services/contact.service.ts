import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IContact } from '../models/IContact';
import { IGroup } from '../models/IGroup';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private serverUrl: string=`http://localhost:9000`      //json server url

  constructor(private httpClient: HttpClient) { 

  }

  //GET all Contacts
  public getAllcontacts(): Observable<IContact[]> {
    let dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpClient.get<IContact[]>(dataUrl).pipe(catchError(this.handleError));
  }

  //GET Single Contact
  public getContact(contactId: string): Observable<IContact>{
    let dataUrl: string = `${this.serverUrl}/contact/${contactId}`;
    return this.httpClient.get<IContact>(dataUrl).pipe(catchError(this.handleError));
  }

  //Create a Contact
  public createContact(contact : IContact):Observable<IContact>{
    let dataUrl: string = `${this.serverUrl}/contact`;
    return this.httpClient.post<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
  }

  //Update a Contact
  public updateContact(contact : IContact, contactId: string):Observable<IContact>{
    let dataUrl: string = `${this.serverUrl}/contact/${contactId}`;
    return this.httpClient.put<IContact>(dataUrl, contact).pipe(catchError(this.handleError));
  }

  //Delete a Contact
  public deleteContact(contactId: string):Observable<{}>{
    let dataUrl: string = `${this.serverUrl}/contact/${contactId}`;
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));
  }

  // Get all Groups
  public getAllGroups(): Observable<IGroup[]> {
    let dataUrl: string = `${this.serverUrl}/groups`;
    return this.httpClient.get<IGroup[]>(dataUrl).pipe(catchError(this.handleError));
  }

  //GET Single Group
  public getGroup(contact: IContact): Observable<IGroup>{
    let dataUrl: string = `${this.serverUrl}/groups/${contact.groupId}`;
    return this.httpClient.get<IGroup>(dataUrl).pipe(catchError(this.handleError));
  }



  //Error Handling
  public handleError(error:HttpErrorResponse){
    let errorMessage:string = "";
    if (error.error instanceof ErrorEvent){
      // client error
      errorMessage = `Error: ${error.error.message}`
    } else {
      //server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);
  }


}
