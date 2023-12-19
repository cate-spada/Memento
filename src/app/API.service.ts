/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateEvento: OnCreateEventoSubscription;
  onUpdateEvento: OnUpdateEventoSubscription;
  onDeleteEvento: OnDeleteEventoSubscription;
  onCreateAgenda: OnCreateAgendaSubscription;
  onUpdateAgenda: OnUpdateAgendaSubscription;
  onDeleteAgenda: OnDeleteAgendaSubscription;
  onCreateUtente: OnCreateUtenteSubscription;
  onUpdateUtente: OnUpdateUtenteSubscription;
  onDeleteUtente: OnDeleteUtenteSubscription;
  onCreateFile: OnCreateFileSubscription;
  onUpdateFile: OnUpdateFileSubscription;
  onDeleteFile: OnDeleteFileSubscription;
  onCreateNotifica: OnCreateNotificaSubscription;
  onUpdateNotifica: OnUpdateNotificaSubscription;
  onDeleteNotifica: OnDeleteNotificaSubscription;
};

export type CreateEventoInput = {
  id?: string | null;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  dataInizio: string;
  dataFine: string;
  agendaEventiId?: string | null;
};

export type ModelEventoConditionInput = {
  titolo?: ModelStringInput | null;
  descrizione?: ModelStringInput | null;
  creatore?: ModelStringInput | null;
  luogo?: ModelStringInput | null;
  piattaforma?: ModelStringInput | null;
  partecipanti?: ModelStringInput | null;
  note?: ModelStringInput | null;
  dataInizio?: ModelStringInput | null;
  dataFine?: ModelStringInput | null;
  and?: Array<ModelEventoConditionInput | null> | null;
  or?: Array<ModelEventoConditionInput | null> | null;
  not?: ModelEventoConditionInput | null;
  agendaEventiId?: ModelIDInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Evento = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: Agenda;
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: ModelFileConnection | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type Agenda = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: ModelEventoConnection | null;
  createdAt: string;
  updatedAt: string;
};

export type ModelEventoConnection = {
  __typename: "ModelEventoConnection";
  items: Array<Evento | null>;
  nextToken?: string | null;
};

export type ModelFileConnection = {
  __typename: "ModelFileConnection";
  items: Array<File | null>;
  nextToken?: string | null;
};

export type File = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: Evento;
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type UpdateEventoInput = {
  id: string;
  titolo?: string | null;
  descrizione?: string | null;
  creatore?: string | null;
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  dataInizio?: string | null;
  dataFine?: string | null;
  agendaEventiId?: string | null;
};

export type DeleteEventoInput = {
  id: string;
};

export type CreateAgendaInput = {
  id?: string | null;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
};

export type ModelAgendaConditionInput = {
  nome?: ModelStringInput | null;
  descrizione?: ModelStringInput | null;
  partecipanti?: ModelStringInput | null;
  and?: Array<ModelAgendaConditionInput | null> | null;
  or?: Array<ModelAgendaConditionInput | null> | null;
  not?: ModelAgendaConditionInput | null;
};

export type UpdateAgendaInput = {
  id: string;
  nome?: string | null;
  descrizione?: string | null;
  partecipanti?: Array<string | null> | null;
};

export type DeleteAgendaInput = {
  id: string;
};

export type CreateUtenteInput = {
  id?: string | null;
  username: string;
  notifica: boolean;
};

export type ModelUtenteConditionInput = {
  username?: ModelStringInput | null;
  notifica?: ModelBooleanInput | null;
  and?: Array<ModelUtenteConditionInput | null> | null;
  or?: Array<ModelUtenteConditionInput | null> | null;
  not?: ModelUtenteConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Utente = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<Notifica | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type Notifica = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

export enum tipoNotifica {
  CREAZIONEEVENTO = "CREAZIONEEVENTO",
  MODIFICAEVENTO = "MODIFICAEVENTO",
  CANCELLAZIONEEVENTO = "CANCELLAZIONEEVENTO",
  CREAZIONEAGENDA = "CREAZIONEAGENDA"
}

export type UpdateUtenteInput = {
  id: string;
  username?: string | null;
  notifica?: boolean | null;
};

export type DeleteUtenteInput = {
  id: string;
};

export type CreateFileInput = {
  id?: string | null;
  nome: string;
  tipo: string;
  nomeEvento?: string | null;
  idEvento?: string | null;
  eventoAllegatiId?: string | null;
};

export type ModelFileConditionInput = {
  nome?: ModelStringInput | null;
  tipo?: ModelStringInput | null;
  nomeEvento?: ModelStringInput | null;
  idEvento?: ModelStringInput | null;
  and?: Array<ModelFileConditionInput | null> | null;
  or?: Array<ModelFileConditionInput | null> | null;
  not?: ModelFileConditionInput | null;
  eventoAllegatiId?: ModelIDInput | null;
};

export type UpdateFileInput = {
  id: string;
  nome?: string | null;
  tipo?: string | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  eventoAllegatiId?: string | null;
};

export type DeleteFileInput = {
  id: string;
};

export type CreateNotificaInput = {
  id?: string | null;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
};

export type ModelNotificaConditionInput = {
  tipo?: ModeltipoNotificaInput | null;
  messaggio?: ModelStringInput | null;
  destinatari?: ModelStringInput | null;
  utente?: ModelStringInput | null;
  accettazione?: ModelStringInput | null;
  nomeEvento?: ModelStringInput | null;
  idEvento?: ModelStringInput | null;
  nomeAgenda?: ModelStringInput | null;
  idAgenda?: ModelStringInput | null;
  and?: Array<ModelNotificaConditionInput | null> | null;
  or?: Array<ModelNotificaConditionInput | null> | null;
  not?: ModelNotificaConditionInput | null;
};

export type ModeltipoNotificaInput = {
  eq?: tipoNotifica | null;
  ne?: tipoNotifica | null;
};

export type UpdateNotificaInput = {
  id: string;
  tipo?: tipoNotifica | null;
  messaggio?: string | null;
  destinatari?: Array<string | null> | null;
  utente?: string | null;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
};

export type DeleteNotificaInput = {
  id: string;
};

export type ModelEventoFilterInput = {
  id?: ModelIDInput | null;
  titolo?: ModelStringInput | null;
  descrizione?: ModelStringInput | null;
  creatore?: ModelStringInput | null;
  luogo?: ModelStringInput | null;
  piattaforma?: ModelStringInput | null;
  partecipanti?: ModelStringInput | null;
  note?: ModelStringInput | null;
  dataInizio?: ModelStringInput | null;
  dataFine?: ModelStringInput | null;
  and?: Array<ModelEventoFilterInput | null> | null;
  or?: Array<ModelEventoFilterInput | null> | null;
  not?: ModelEventoFilterInput | null;
  agendaEventiId?: ModelIDInput | null;
};

export type ModelAgendaFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  descrizione?: ModelStringInput | null;
  partecipanti?: ModelStringInput | null;
  and?: Array<ModelAgendaFilterInput | null> | null;
  or?: Array<ModelAgendaFilterInput | null> | null;
  not?: ModelAgendaFilterInput | null;
};

export type ModelAgendaConnection = {
  __typename: "ModelAgendaConnection";
  items: Array<Agenda | null>;
  nextToken?: string | null;
};

export type ModelUtenteFilterInput = {
  id?: ModelIDInput | null;
  username?: ModelStringInput | null;
  notifica?: ModelBooleanInput | null;
  and?: Array<ModelUtenteFilterInput | null> | null;
  or?: Array<ModelUtenteFilterInput | null> | null;
  not?: ModelUtenteFilterInput | null;
};

export type ModelUtenteConnection = {
  __typename: "ModelUtenteConnection";
  items: Array<Utente | null>;
  nextToken?: string | null;
};

export type ModelFileFilterInput = {
  id?: ModelIDInput | null;
  nome?: ModelStringInput | null;
  tipo?: ModelStringInput | null;
  nomeEvento?: ModelStringInput | null;
  idEvento?: ModelStringInput | null;
  and?: Array<ModelFileFilterInput | null> | null;
  or?: Array<ModelFileFilterInput | null> | null;
  not?: ModelFileFilterInput | null;
  eventoAllegatiId?: ModelIDInput | null;
};

export type ModelNotificaFilterInput = {
  id?: ModelIDInput | null;
  tipo?: ModeltipoNotificaInput | null;
  messaggio?: ModelStringInput | null;
  destinatari?: ModelStringInput | null;
  utente?: ModelStringInput | null;
  accettazione?: ModelStringInput | null;
  nomeEvento?: ModelStringInput | null;
  idEvento?: ModelStringInput | null;
  nomeAgenda?: ModelStringInput | null;
  idAgenda?: ModelStringInput | null;
  and?: Array<ModelNotificaFilterInput | null> | null;
  or?: Array<ModelNotificaFilterInput | null> | null;
  not?: ModelNotificaFilterInput | null;
};

export type ModelNotificaConnection = {
  __typename: "ModelNotificaConnection";
  items: Array<Notifica | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionEventoFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  titolo?: ModelSubscriptionStringInput | null;
  descrizione?: ModelSubscriptionStringInput | null;
  creatore?: ModelSubscriptionStringInput | null;
  luogo?: ModelSubscriptionStringInput | null;
  piattaforma?: ModelSubscriptionStringInput | null;
  partecipanti?: ModelSubscriptionStringInput | null;
  note?: ModelSubscriptionStringInput | null;
  dataInizio?: ModelSubscriptionStringInput | null;
  dataFine?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEventoFilterInput | null> | null;
  or?: Array<ModelSubscriptionEventoFilterInput | null> | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionAgendaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  descrizione?: ModelSubscriptionStringInput | null;
  partecipanti?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionAgendaFilterInput | null> | null;
  or?: Array<ModelSubscriptionAgendaFilterInput | null> | null;
};

export type ModelSubscriptionUtenteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  username?: ModelSubscriptionStringInput | null;
  notifica?: ModelSubscriptionBooleanInput | null;
  and?: Array<ModelSubscriptionUtenteFilterInput | null> | null;
  or?: Array<ModelSubscriptionUtenteFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type ModelSubscriptionFileFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  nome?: ModelSubscriptionStringInput | null;
  tipo?: ModelSubscriptionStringInput | null;
  nomeEvento?: ModelSubscriptionStringInput | null;
  idEvento?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionFileFilterInput | null> | null;
  or?: Array<ModelSubscriptionFileFilterInput | null> | null;
};

export type ModelSubscriptionNotificaFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  tipo?: ModelSubscriptionStringInput | null;
  messaggio?: ModelSubscriptionStringInput | null;
  destinatari?: ModelSubscriptionStringInput | null;
  utente?: ModelSubscriptionStringInput | null;
  accettazione?: ModelSubscriptionStringInput | null;
  nomeEvento?: ModelSubscriptionStringInput | null;
  idEvento?: ModelSubscriptionStringInput | null;
  nomeAgenda?: ModelSubscriptionStringInput | null;
  idAgenda?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionNotificaFilterInput | null> | null;
  or?: Array<ModelSubscriptionNotificaFilterInput | null> | null;
};

export type CreateEventoMutation = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: {
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      nome: string;
      tipo: string;
      nomeEvento?: string | null;
      idEvento?: string | null;
      createdAt: string;
      updatedAt: string;
      eventoAllegatiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type UpdateEventoMutation = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: {
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      nome: string;
      tipo: string;
      nomeEvento?: string | null;
      idEvento?: string | null;
      createdAt: string;
      updatedAt: string;
      eventoAllegatiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type DeleteEventoMutation = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: {
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      nome: string;
      tipo: string;
      nomeEvento?: string | null;
      idEvento?: string | null;
      createdAt: string;
      updatedAt: string;
      eventoAllegatiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type CreateAgendaMutation = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: {
    __typename: "ModelEventoConnection";
    items: Array<{
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateAgendaMutation = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: {
    __typename: "ModelEventoConnection";
    items: Array<{
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteAgendaMutation = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: {
    __typename: "ModelEventoConnection";
    items: Array<{
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateUtenteMutation = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateUtenteMutation = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteUtenteMutation = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateFileMutation = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: {
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  };
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type UpdateFileMutation = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: {
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  };
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type DeleteFileMutation = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: {
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  };
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type CreateNotificaMutation = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateNotificaMutation = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteNotificaMutation = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetEventoQuery = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: {
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      nome: string;
      tipo: string;
      nomeEvento?: string | null;
      idEvento?: string | null;
      createdAt: string;
      updatedAt: string;
      eventoAllegatiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type ListEventosQuery = {
  __typename: "ModelEventoConnection";
  items: Array<{
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetAgendaQuery = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: {
    __typename: "ModelEventoConnection";
    items: Array<{
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListAgendaQuery = {
  __typename: "ModelAgendaConnection";
  items: Array<{
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetUtenteQuery = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type ListUtentesQuery = {
  __typename: "ModelUtenteConnection";
  items: Array<{
    __typename: "Utente";
    id: string;
    username: string;
    notifica: boolean;
    notifiche?: Array<{
      __typename: "Notifica";
      id: string;
      tipo: tipoNotifica;
      messaggio: string;
      destinatari: Array<string | null>;
      utente: string;
      accettazione?: Array<string | null> | null;
      nomeEvento?: string | null;
      idEvento?: string | null;
      nomeAgenda?: string | null;
      idAgenda?: string | null;
      createdAt: string;
      updatedAt: string;
    } | null> | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type GetFileQuery = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: {
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  };
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type ListFilesQuery = {
  __typename: "ModelFileConnection";
  items: Array<{
    __typename: "File";
    id: string;
    nome: string;
    tipo: string;
    evento: {
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    };
    nomeEvento?: string | null;
    idEvento?: string | null;
    createdAt: string;
    updatedAt: string;
    eventoAllegatiId?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetNotificaQuery = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListNotificasQuery = {
  __typename: "ModelNotificaConnection";
  items: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateEventoSubscription = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: {
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      nome: string;
      tipo: string;
      nomeEvento?: string | null;
      idEvento?: string | null;
      createdAt: string;
      updatedAt: string;
      eventoAllegatiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type OnUpdateEventoSubscription = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: {
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      nome: string;
      tipo: string;
      nomeEvento?: string | null;
      idEvento?: string | null;
      createdAt: string;
      updatedAt: string;
      eventoAllegatiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type OnDeleteEventoSubscription = {
  __typename: "Evento";
  id: string;
  titolo: string;
  descrizione?: string | null;
  creatore?: string | null;
  agenda: {
    __typename: "Agenda";
    id: string;
    nome: string;
    descrizione?: string | null;
    partecipanti: Array<string | null>;
    eventi?: {
      __typename: "ModelEventoConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  };
  luogo?: string | null;
  piattaforma?: string | null;
  partecipanti?: Array<string | null> | null;
  note?: string | null;
  allegati?: {
    __typename: "ModelFileConnection";
    items: Array<{
      __typename: "File";
      id: string;
      nome: string;
      tipo: string;
      nomeEvento?: string | null;
      idEvento?: string | null;
      createdAt: string;
      updatedAt: string;
      eventoAllegatiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  dataInizio: string;
  dataFine: string;
  createdAt: string;
  updatedAt: string;
  agendaEventiId?: string | null;
};

export type OnCreateAgendaSubscription = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: {
    __typename: "ModelEventoConnection";
    items: Array<{
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateAgendaSubscription = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: {
    __typename: "ModelEventoConnection";
    items: Array<{
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteAgendaSubscription = {
  __typename: "Agenda";
  id: string;
  nome: string;
  descrizione?: string | null;
  partecipanti: Array<string | null>;
  eventi?: {
    __typename: "ModelEventoConnection";
    items: Array<{
      __typename: "Evento";
      id: string;
      titolo: string;
      descrizione?: string | null;
      creatore?: string | null;
      luogo?: string | null;
      piattaforma?: string | null;
      partecipanti?: Array<string | null> | null;
      note?: string | null;
      dataInizio: string;
      dataFine: string;
      createdAt: string;
      updatedAt: string;
      agendaEventiId?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateUtenteSubscription = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateUtenteSubscription = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteUtenteSubscription = {
  __typename: "Utente";
  id: string;
  username: string;
  notifica: boolean;
  notifiche?: Array<{
    __typename: "Notifica";
    id: string;
    tipo: tipoNotifica;
    messaggio: string;
    destinatari: Array<string | null>;
    utente: string;
    accettazione?: Array<string | null> | null;
    nomeEvento?: string | null;
    idEvento?: string | null;
    nomeAgenda?: string | null;
    idAgenda?: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateFileSubscription = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: {
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  };
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type OnUpdateFileSubscription = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: {
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  };
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type OnDeleteFileSubscription = {
  __typename: "File";
  id: string;
  nome: string;
  tipo: string;
  evento: {
    __typename: "Evento";
    id: string;
    titolo: string;
    descrizione?: string | null;
    creatore?: string | null;
    agenda: {
      __typename: "Agenda";
      id: string;
      nome: string;
      descrizione?: string | null;
      partecipanti: Array<string | null>;
      createdAt: string;
      updatedAt: string;
    };
    luogo?: string | null;
    piattaforma?: string | null;
    partecipanti?: Array<string | null> | null;
    note?: string | null;
    allegati?: {
      __typename: "ModelFileConnection";
      nextToken?: string | null;
    } | null;
    dataInizio: string;
    dataFine: string;
    createdAt: string;
    updatedAt: string;
    agendaEventiId?: string | null;
  };
  nomeEvento?: string | null;
  idEvento?: string | null;
  createdAt: string;
  updatedAt: string;
  eventoAllegatiId?: string | null;
};

export type OnCreateNotificaSubscription = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateNotificaSubscription = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteNotificaSubscription = {
  __typename: "Notifica";
  id: string;
  tipo: tipoNotifica;
  messaggio: string;
  destinatari: Array<string | null>;
  utente: string;
  accettazione?: Array<string | null> | null;
  nomeEvento?: string | null;
  idEvento?: string | null;
  nomeAgenda?: string | null;
  idAgenda?: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateEvento(
    input: CreateEventoInput,
    condition?: ModelEventoConditionInput
  ): Promise<CreateEventoMutation> {
    const statement = `mutation CreateEvento($input: CreateEventoInput!, $condition: ModelEventoConditionInput) {
        createEvento(input: $input, condition: $condition) {
          __typename
          id
          titolo
          descrizione
          creatore
          agenda {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          luogo
          piattaforma
          partecipanti
          note
          allegati {
            __typename
            items {
              __typename
              id
              nome
              tipo
              nomeEvento
              idEvento
              createdAt
              updatedAt
              eventoAllegatiId
            }
            nextToken
          }
          dataInizio
          dataFine
          createdAt
          updatedAt
          agendaEventiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEventoMutation>response.data.createEvento;
  }
  async UpdateEvento(
    input: UpdateEventoInput,
    condition?: ModelEventoConditionInput
  ): Promise<UpdateEventoMutation> {
    const statement = `mutation UpdateEvento($input: UpdateEventoInput!, $condition: ModelEventoConditionInput) {
        updateEvento(input: $input, condition: $condition) {
          __typename
          id
          titolo
          descrizione
          creatore
          agenda {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          luogo
          piattaforma
          partecipanti
          note
          allegati {
            __typename
            items {
              __typename
              id
              nome
              tipo
              nomeEvento
              idEvento
              createdAt
              updatedAt
              eventoAllegatiId
            }
            nextToken
          }
          dataInizio
          dataFine
          createdAt
          updatedAt
          agendaEventiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEventoMutation>response.data.updateEvento;
  }
  async DeleteEvento(
    input: DeleteEventoInput,
    condition?: ModelEventoConditionInput
  ): Promise<DeleteEventoMutation> {
    const statement = `mutation DeleteEvento($input: DeleteEventoInput!, $condition: ModelEventoConditionInput) {
        deleteEvento(input: $input, condition: $condition) {
          __typename
          id
          titolo
          descrizione
          creatore
          agenda {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          luogo
          piattaforma
          partecipanti
          note
          allegati {
            __typename
            items {
              __typename
              id
              nome
              tipo
              nomeEvento
              idEvento
              createdAt
              updatedAt
              eventoAllegatiId
            }
            nextToken
          }
          dataInizio
          dataFine
          createdAt
          updatedAt
          agendaEventiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEventoMutation>response.data.deleteEvento;
  }
  async CreateAgenda(
    input: CreateAgendaInput,
    condition?: ModelAgendaConditionInput
  ): Promise<CreateAgendaMutation> {
    const statement = `mutation CreateAgenda($input: CreateAgendaInput!, $condition: ModelAgendaConditionInput) {
        createAgenda(input: $input, condition: $condition) {
          __typename
          id
          nome
          descrizione
          partecipanti
          eventi {
            __typename
            items {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateAgendaMutation>response.data.createAgenda;
  }
  async UpdateAgenda(
    input: UpdateAgendaInput,
    condition?: ModelAgendaConditionInput
  ): Promise<UpdateAgendaMutation> {
    const statement = `mutation UpdateAgenda($input: UpdateAgendaInput!, $condition: ModelAgendaConditionInput) {
        updateAgenda(input: $input, condition: $condition) {
          __typename
          id
          nome
          descrizione
          partecipanti
          eventi {
            __typename
            items {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateAgendaMutation>response.data.updateAgenda;
  }
  async DeleteAgenda(
    input: DeleteAgendaInput,
    condition?: ModelAgendaConditionInput
  ): Promise<DeleteAgendaMutation> {
    const statement = `mutation DeleteAgenda($input: DeleteAgendaInput!, $condition: ModelAgendaConditionInput) {
        deleteAgenda(input: $input, condition: $condition) {
          __typename
          id
          nome
          descrizione
          partecipanti
          eventi {
            __typename
            items {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteAgendaMutation>response.data.deleteAgenda;
  }
  async CreateUtente(
    input: CreateUtenteInput,
    condition?: ModelUtenteConditionInput
  ): Promise<CreateUtenteMutation> {
    const statement = `mutation CreateUtente($input: CreateUtenteInput!, $condition: ModelUtenteConditionInput) {
        createUtente(input: $input, condition: $condition) {
          __typename
          id
          username
          notifica
          notifiche {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUtenteMutation>response.data.createUtente;
  }
  async UpdateUtente(
    input: UpdateUtenteInput,
    condition?: ModelUtenteConditionInput
  ): Promise<UpdateUtenteMutation> {
    const statement = `mutation UpdateUtente($input: UpdateUtenteInput!, $condition: ModelUtenteConditionInput) {
        updateUtente(input: $input, condition: $condition) {
          __typename
          id
          username
          notifica
          notifiche {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUtenteMutation>response.data.updateUtente;
  }
  async DeleteUtente(
    input: DeleteUtenteInput,
    condition?: ModelUtenteConditionInput
  ): Promise<DeleteUtenteMutation> {
    const statement = `mutation DeleteUtente($input: DeleteUtenteInput!, $condition: ModelUtenteConditionInput) {
        deleteUtente(input: $input, condition: $condition) {
          __typename
          id
          username
          notifica
          notifiche {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUtenteMutation>response.data.deleteUtente;
  }
  async CreateFile(
    input: CreateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<CreateFileMutation> {
    const statement = `mutation CreateFile($input: CreateFileInput!, $condition: ModelFileConditionInput) {
        createFile(input: $input, condition: $condition) {
          __typename
          id
          nome
          tipo
          evento {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nomeEvento
          idEvento
          createdAt
          updatedAt
          eventoAllegatiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateFileMutation>response.data.createFile;
  }
  async UpdateFile(
    input: UpdateFileInput,
    condition?: ModelFileConditionInput
  ): Promise<UpdateFileMutation> {
    const statement = `mutation UpdateFile($input: UpdateFileInput!, $condition: ModelFileConditionInput) {
        updateFile(input: $input, condition: $condition) {
          __typename
          id
          nome
          tipo
          evento {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nomeEvento
          idEvento
          createdAt
          updatedAt
          eventoAllegatiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateFileMutation>response.data.updateFile;
  }
  async DeleteFile(
    input: DeleteFileInput,
    condition?: ModelFileConditionInput
  ): Promise<DeleteFileMutation> {
    const statement = `mutation DeleteFile($input: DeleteFileInput!, $condition: ModelFileConditionInput) {
        deleteFile(input: $input, condition: $condition) {
          __typename
          id
          nome
          tipo
          evento {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nomeEvento
          idEvento
          createdAt
          updatedAt
          eventoAllegatiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteFileMutation>response.data.deleteFile;
  }
  async CreateNotifica(
    input: CreateNotificaInput,
    condition?: ModelNotificaConditionInput
  ): Promise<CreateNotificaMutation> {
    const statement = `mutation CreateNotifica($input: CreateNotificaInput!, $condition: ModelNotificaConditionInput) {
        createNotifica(input: $input, condition: $condition) {
          __typename
          id
          tipo
          messaggio
          destinatari
          utente
          accettazione
          nomeEvento
          idEvento
          nomeAgenda
          idAgenda
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateNotificaMutation>response.data.createNotifica;
  }
  async UpdateNotifica(
    input: UpdateNotificaInput,
    condition?: ModelNotificaConditionInput
  ): Promise<UpdateNotificaMutation> {
    const statement = `mutation UpdateNotifica($input: UpdateNotificaInput!, $condition: ModelNotificaConditionInput) {
        updateNotifica(input: $input, condition: $condition) {
          __typename
          id
          tipo
          messaggio
          destinatari
          utente
          accettazione
          nomeEvento
          idEvento
          nomeAgenda
          idAgenda
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateNotificaMutation>response.data.updateNotifica;
  }
  async DeleteNotifica(
    input: DeleteNotificaInput,
    condition?: ModelNotificaConditionInput
  ): Promise<DeleteNotificaMutation> {
    const statement = `mutation DeleteNotifica($input: DeleteNotificaInput!, $condition: ModelNotificaConditionInput) {
        deleteNotifica(input: $input, condition: $condition) {
          __typename
          id
          tipo
          messaggio
          destinatari
          utente
          accettazione
          nomeEvento
          idEvento
          nomeAgenda
          idAgenda
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteNotificaMutation>response.data.deleteNotifica;
  }
  async GetEvento(id: string): Promise<GetEventoQuery> {
    const statement = `query GetEvento($id: ID!) {
        getEvento(id: $id) {
          __typename
          id
          titolo
          descrizione
          creatore
          agenda {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          luogo
          piattaforma
          partecipanti
          note
          allegati {
            __typename
            items {
              __typename
              id
              nome
              tipo
              nomeEvento
              idEvento
              createdAt
              updatedAt
              eventoAllegatiId
            }
            nextToken
          }
          dataInizio
          dataFine
          createdAt
          updatedAt
          agendaEventiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEventoQuery>response.data.getEvento;
  }
  async ListEventos(
    filter?: ModelEventoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEventosQuery> {
    const statement = `query ListEventos($filter: ModelEventoFilterInput, $limit: Int, $nextToken: String) {
        listEventos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEventosQuery>response.data.listEventos;
  }
  async GetAgenda(id: string): Promise<GetAgendaQuery> {
    const statement = `query GetAgenda($id: ID!) {
        getAgenda(id: $id) {
          __typename
          id
          nome
          descrizione
          partecipanti
          eventi {
            __typename
            items {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetAgendaQuery>response.data.getAgenda;
  }
  async ListAgenda(
    filter?: ModelAgendaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListAgendaQuery> {
    const statement = `query ListAgenda($filter: ModelAgendaFilterInput, $limit: Int, $nextToken: String) {
        listAgenda(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListAgendaQuery>response.data.listAgenda;
  }
  async GetUtente(id: string): Promise<GetUtenteQuery> {
    const statement = `query GetUtente($id: ID!) {
        getUtente(id: $id) {
          __typename
          id
          username
          notifica
          notifiche {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUtenteQuery>response.data.getUtente;
  }
  async ListUtentes(
    filter?: ModelUtenteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUtentesQuery> {
    const statement = `query ListUtentes($filter: ModelUtenteFilterInput, $limit: Int, $nextToken: String) {
        listUtentes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            notifica
            notifiche {
              __typename
              id
              tipo
              messaggio
              destinatari
              utente
              accettazione
              nomeEvento
              idEvento
              nomeAgenda
              idAgenda
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUtentesQuery>response.data.listUtentes;
  }
  async GetFile(id: string): Promise<GetFileQuery> {
    const statement = `query GetFile($id: ID!) {
        getFile(id: $id) {
          __typename
          id
          nome
          tipo
          evento {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nomeEvento
          idEvento
          createdAt
          updatedAt
          eventoAllegatiId
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetFileQuery>response.data.getFile;
  }
  async ListFiles(
    filter?: ModelFileFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListFilesQuery> {
    const statement = `query ListFiles($filter: ModelFileFilterInput, $limit: Int, $nextToken: String) {
        listFiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            nome
            tipo
            evento {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nomeEvento
            idEvento
            createdAt
            updatedAt
            eventoAllegatiId
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListFilesQuery>response.data.listFiles;
  }
  async GetNotifica(id: string): Promise<GetNotificaQuery> {
    const statement = `query GetNotifica($id: ID!) {
        getNotifica(id: $id) {
          __typename
          id
          tipo
          messaggio
          destinatari
          utente
          accettazione
          nomeEvento
          idEvento
          nomeAgenda
          idAgenda
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNotificaQuery>response.data.getNotifica;
  }
  async ListNotificas(
    filter?: ModelNotificaFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotificasQuery> {
    const statement = `query ListNotificas($filter: ModelNotificaFilterInput, $limit: Int, $nextToken: String) {
        listNotificas(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListNotificasQuery>response.data.listNotificas;
  }
  OnCreateEventoListener(
    filter?: ModelSubscriptionEventoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvento">>
  > {
    const statement = `subscription OnCreateEvento($filter: ModelSubscriptionEventoFilterInput) {
        onCreateEvento(filter: $filter) {
          __typename
          id
          titolo
          descrizione
          creatore
          agenda {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          luogo
          piattaforma
          partecipanti
          note
          allegati {
            __typename
            items {
              __typename
              id
              nome
              tipo
              nomeEvento
              idEvento
              createdAt
              updatedAt
              eventoAllegatiId
            }
            nextToken
          }
          dataInizio
          dataFine
          createdAt
          updatedAt
          agendaEventiId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEvento">>
    >;
  }

  OnUpdateEventoListener(
    filter?: ModelSubscriptionEventoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvento">>
  > {
    const statement = `subscription OnUpdateEvento($filter: ModelSubscriptionEventoFilterInput) {
        onUpdateEvento(filter: $filter) {
          __typename
          id
          titolo
          descrizione
          creatore
          agenda {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          luogo
          piattaforma
          partecipanti
          note
          allegati {
            __typename
            items {
              __typename
              id
              nome
              tipo
              nomeEvento
              idEvento
              createdAt
              updatedAt
              eventoAllegatiId
            }
            nextToken
          }
          dataInizio
          dataFine
          createdAt
          updatedAt
          agendaEventiId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEvento">>
    >;
  }

  OnDeleteEventoListener(
    filter?: ModelSubscriptionEventoFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvento">>
  > {
    const statement = `subscription OnDeleteEvento($filter: ModelSubscriptionEventoFilterInput) {
        onDeleteEvento(filter: $filter) {
          __typename
          id
          titolo
          descrizione
          creatore
          agenda {
            __typename
            id
            nome
            descrizione
            partecipanti
            eventi {
              __typename
              nextToken
            }
            createdAt
            updatedAt
          }
          luogo
          piattaforma
          partecipanti
          note
          allegati {
            __typename
            items {
              __typename
              id
              nome
              tipo
              nomeEvento
              idEvento
              createdAt
              updatedAt
              eventoAllegatiId
            }
            nextToken
          }
          dataInizio
          dataFine
          createdAt
          updatedAt
          agendaEventiId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEvento">>
    >;
  }

  OnCreateAgendaListener(
    filter?: ModelSubscriptionAgendaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAgenda">>
  > {
    const statement = `subscription OnCreateAgenda($filter: ModelSubscriptionAgendaFilterInput) {
        onCreateAgenda(filter: $filter) {
          __typename
          id
          nome
          descrizione
          partecipanti
          eventi {
            __typename
            items {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateAgenda">>
    >;
  }

  OnUpdateAgendaListener(
    filter?: ModelSubscriptionAgendaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAgenda">>
  > {
    const statement = `subscription OnUpdateAgenda($filter: ModelSubscriptionAgendaFilterInput) {
        onUpdateAgenda(filter: $filter) {
          __typename
          id
          nome
          descrizione
          partecipanti
          eventi {
            __typename
            items {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateAgenda">>
    >;
  }

  OnDeleteAgendaListener(
    filter?: ModelSubscriptionAgendaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAgenda">>
  > {
    const statement = `subscription OnDeleteAgenda($filter: ModelSubscriptionAgendaFilterInput) {
        onDeleteAgenda(filter: $filter) {
          __typename
          id
          nome
          descrizione
          partecipanti
          eventi {
            __typename
            items {
              __typename
              id
              titolo
              descrizione
              creatore
              luogo
              piattaforma
              partecipanti
              note
              dataInizio
              dataFine
              createdAt
              updatedAt
              agendaEventiId
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteAgenda">>
    >;
  }

  OnCreateUtenteListener(
    filter?: ModelSubscriptionUtenteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUtente">>
  > {
    const statement = `subscription OnCreateUtente($filter: ModelSubscriptionUtenteFilterInput) {
        onCreateUtente(filter: $filter) {
          __typename
          id
          username
          notifica
          notifiche {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUtente">>
    >;
  }

  OnUpdateUtenteListener(
    filter?: ModelSubscriptionUtenteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUtente">>
  > {
    const statement = `subscription OnUpdateUtente($filter: ModelSubscriptionUtenteFilterInput) {
        onUpdateUtente(filter: $filter) {
          __typename
          id
          username
          notifica
          notifiche {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUtente">>
    >;
  }

  OnDeleteUtenteListener(
    filter?: ModelSubscriptionUtenteFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUtente">>
  > {
    const statement = `subscription OnDeleteUtente($filter: ModelSubscriptionUtenteFilterInput) {
        onDeleteUtente(filter: $filter) {
          __typename
          id
          username
          notifica
          notifiche {
            __typename
            id
            tipo
            messaggio
            destinatari
            utente
            accettazione
            nomeEvento
            idEvento
            nomeAgenda
            idAgenda
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUtente">>
    >;
  }

  OnCreateFileListener(
    filter?: ModelSubscriptionFileFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFile">>
  > {
    const statement = `subscription OnCreateFile($filter: ModelSubscriptionFileFilterInput) {
        onCreateFile(filter: $filter) {
          __typename
          id
          nome
          tipo
          evento {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nomeEvento
          idEvento
          createdAt
          updatedAt
          eventoAllegatiId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateFile">>
    >;
  }

  OnUpdateFileListener(
    filter?: ModelSubscriptionFileFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFile">>
  > {
    const statement = `subscription OnUpdateFile($filter: ModelSubscriptionFileFilterInput) {
        onUpdateFile(filter: $filter) {
          __typename
          id
          nome
          tipo
          evento {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nomeEvento
          idEvento
          createdAt
          updatedAt
          eventoAllegatiId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateFile">>
    >;
  }

  OnDeleteFileListener(
    filter?: ModelSubscriptionFileFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFile">>
  > {
    const statement = `subscription OnDeleteFile($filter: ModelSubscriptionFileFilterInput) {
        onDeleteFile(filter: $filter) {
          __typename
          id
          nome
          tipo
          evento {
            __typename
            id
            titolo
            descrizione
            creatore
            agenda {
              __typename
              id
              nome
              descrizione
              partecipanti
              createdAt
              updatedAt
            }
            luogo
            piattaforma
            partecipanti
            note
            allegati {
              __typename
              nextToken
            }
            dataInizio
            dataFine
            createdAt
            updatedAt
            agendaEventiId
          }
          nomeEvento
          idEvento
          createdAt
          updatedAt
          eventoAllegatiId
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteFile">>
    >;
  }

  OnCreateNotificaListener(
    filter?: ModelSubscriptionNotificaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNotifica">>
  > {
    const statement = `subscription OnCreateNotifica($filter: ModelSubscriptionNotificaFilterInput) {
        onCreateNotifica(filter: $filter) {
          __typename
          id
          tipo
          messaggio
          destinatari
          utente
          accettazione
          nomeEvento
          idEvento
          nomeAgenda
          idAgenda
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNotifica">>
    >;
  }

  OnUpdateNotificaListener(
    filter?: ModelSubscriptionNotificaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNotifica">>
  > {
    const statement = `subscription OnUpdateNotifica($filter: ModelSubscriptionNotificaFilterInput) {
        onUpdateNotifica(filter: $filter) {
          __typename
          id
          tipo
          messaggio
          destinatari
          utente
          accettazione
          nomeEvento
          idEvento
          nomeAgenda
          idAgenda
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNotifica">>
    >;
  }

  OnDeleteNotificaListener(
    filter?: ModelSubscriptionNotificaFilterInput
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNotifica">>
  > {
    const statement = `subscription OnDeleteNotifica($filter: ModelSubscriptionNotificaFilterInput) {
        onDeleteNotifica(filter: $filter) {
          __typename
          id
          tipo
          messaggio
          destinatari
          utente
          accettazione
          nomeEvento
          idEvento
          nomeAgenda
          idAgenda
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNotifica">>
    >;
  }
}
