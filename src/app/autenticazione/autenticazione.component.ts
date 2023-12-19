import { Component, OnInit } from '@angular/core';
import { Amplify } from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import awsExports from 'src/aws-exports';
import { I18n } from 'aws-amplify';
import { translations } from '@aws-amplify/ui-angular';

I18n.putVocabularies(translations);
I18n.setLanguage('it');
I18n.putVocabulariesForLanguage('it', {
  'Family Name': 'Cognome',
  'Name': 'Nome',
  'Phone':'Telefono',
  'Enter your Username': 'Inserisci nome utente o email',
  'Enter your Password': 'Inserisci la tua password',
  'Please confirm your Password': 'Conferma la tua password',
  'Enter your Email': 'Inserisci la tua email'
});

@Component({
  selector: 'app-autenticazione',
  templateUrl: './autenticazione.component.html',
  styleUrls: ['./autenticazione.component.css']
})
export class AutenticazioneComponent {

  constructor(public authenticator: AuthenticatorService) {
    Amplify.configure(awsExports);
  }

  public formFields = {
    signUp: {
      email: {
        order:2
      },
      family_name: {
        order: 3
      },
      name: {
        order: 4
      },
      birthdate: {
        order: 5
      },
      password: {
        order: 7
      },
      confirm_password: {
        order: 8
      },
      phone_number: {
        order: 6,
        dialCode: "+39"
      },
      username: {
        order: 1
      },
    },
  }

}
