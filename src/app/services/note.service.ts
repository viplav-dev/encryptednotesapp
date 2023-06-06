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
  onCreateNotebook: OnCreateNotebookSubscription;
  onUpdateNotebook: OnUpdateNotebookSubscription;
  onDeleteNotebook: OnDeleteNotebookSubscription;
  onCreateNote: OnCreateNoteSubscription;
  onUpdateNote: OnUpdateNoteSubscription;
  onDeleteNote: OnDeleteNoteSubscription;
  onCreateUsers: OnCreateUsersSubscription;
  onUpdateUsers: OnUpdateUsersSubscription;
  onDeleteUsers: OnDeleteUsersSubscription;
};

export type CreateNotebookInput = {
  id?: string | null;
  title: string;
  user: string;
};

export type ModelNotebookConditionInput = {
  title?: ModelStringInput | null;
  user?: ModelIDInput | null;
  and?: Array<ModelNotebookConditionInput | null> | null;
  or?: Array<ModelNotebookConditionInput | null> | null;
  not?: ModelNotebookConditionInput | null;
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

export type Notebook = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: ModelNoteConnection | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelNoteConnection = {
  __typename: "ModelNoteConnection";
  items: Array<Note | null>;
  nextToken?: string | null;
};

export type Note = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: Notebook;
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type UpdateNotebookInput = {
  id: string;
  title?: string | null;
  user?: string | null;
};

export type DeleteNotebookInput = {
  id: string;
};

export type CreateNoteInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  user: string;
  notebookNotesId?: string | null;
};

export type ModelNoteConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  user?: ModelIDInput | null;
  and?: Array<ModelNoteConditionInput | null> | null;
  or?: Array<ModelNoteConditionInput | null> | null;
  not?: ModelNoteConditionInput | null;
  notebookNotesId?: ModelIDInput | null;
};

export type UpdateNoteInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  user?: string | null;
  notebookNotesId?: string | null;
};

export type DeleteNoteInput = {
  id: string;
};

export type CreateUsersInput = {
  id?: string | null;
  masterPassword?: boolean | null;
  hash?: string | null;
};

export type ModelUsersConditionInput = {
  masterPassword?: ModelBooleanInput | null;
  hash?: ModelStringInput | null;
  and?: Array<ModelUsersConditionInput | null> | null;
  or?: Array<ModelUsersConditionInput | null> | null;
  not?: ModelUsersConditionInput | null;
};

export type ModelBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type Users = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateUsersInput = {
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
};

export type DeleteUsersInput = {
  id: string;
};

export type ModelNotebookFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  user?: ModelIDInput | null;
  and?: Array<ModelNotebookFilterInput | null> | null;
  or?: Array<ModelNotebookFilterInput | null> | null;
  not?: ModelNotebookFilterInput | null;
};

export type ModelNotebookConnection = {
  __typename: "ModelNotebookConnection";
  items: Array<Notebook | null>;
  nextToken?: string | null;
};

export type ModelNoteFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  user?: ModelIDInput | null;
  and?: Array<ModelNoteFilterInput | null> | null;
  or?: Array<ModelNoteFilterInput | null> | null;
  not?: ModelNoteFilterInput | null;
  notebookNotesId?: ModelIDInput | null;
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null;
  masterPassword?: ModelBooleanInput | null;
  hash?: ModelStringInput | null;
  and?: Array<ModelUsersFilterInput | null> | null;
  or?: Array<ModelUsersFilterInput | null> | null;
  not?: ModelUsersFilterInput | null;
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection";
  items: Array<Users | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionNotebookFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  user?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionNotebookFilterInput | null> | null;
  or?: Array<ModelSubscriptionNotebookFilterInput | null> | null;
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

export type ModelSubscriptionNoteFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  title?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  user?: ModelSubscriptionIDInput | null;
  and?: Array<ModelSubscriptionNoteFilterInput | null> | null;
  or?: Array<ModelSubscriptionNoteFilterInput | null> | null;
};

export type ModelSubscriptionUsersFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  masterPassword?: ModelSubscriptionBooleanInput | null;
  hash?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionUsersFilterInput | null> | null;
  or?: Array<ModelSubscriptionUsersFilterInput | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null;
  eq?: boolean | null;
};

export type CreateNotebookMutation = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: {
    __typename: "ModelNoteConnection";
    items: Array<{
      __typename: "Note";
      id: string;
      title: string;
      description?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      notebookNotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateNotebookMutation = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: {
    __typename: "ModelNoteConnection";
    items: Array<{
      __typename: "Note";
      id: string;
      title: string;
      description?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      notebookNotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteNotebookMutation = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: {
    __typename: "ModelNoteConnection";
    items: Array<{
      __typename: "Note";
      id: string;
      title: string;
      description?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      notebookNotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateNoteMutation = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: {
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type UpdateNoteMutation = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: {
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type DeleteNoteMutation = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: {
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type CreateUsersMutation = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateUsersMutation = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteUsersMutation = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type GetNotebookQuery = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: {
    __typename: "ModelNoteConnection";
    items: Array<{
      __typename: "Note";
      id: string;
      title: string;
      description?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      notebookNotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListNotebooksQuery = {
  __typename: "ModelNotebookConnection";
  items: Array<{
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetNoteQuery = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: {
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type ListNotesQuery = {
  __typename: "ModelNoteConnection";
  items: Array<{
    __typename: "Note";
    id: string;
    title: string;
    description?: string | null;
    notebook: {
      __typename: "Notebook";
      id: string;
      title: string;
      user: string;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    user: string;
    createdAt: string;
    updatedAt: string;
    notebookNotesId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetUsersQuery = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUsersConnection";
  items: Array<{
    __typename: "Users";
    id: string;
    masterPassword?: boolean | null;
    hash?: string | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateNotebookSubscription = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: {
    __typename: "ModelNoteConnection";
    items: Array<{
      __typename: "Note";
      id: string;
      title: string;
      description?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      notebookNotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateNotebookSubscription = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: {
    __typename: "ModelNoteConnection";
    items: Array<{
      __typename: "Note";
      id: string;
      title: string;
      description?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      notebookNotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteNotebookSubscription = {
  __typename: "Notebook";
  id: string;
  title: string;
  Notes?: {
    __typename: "ModelNoteConnection";
    items: Array<{
      __typename: "Note";
      id: string;
      title: string;
      description?: string | null;
      user: string;
      createdAt: string;
      updatedAt: string;
      notebookNotesId?: string | null;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
  user: string;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateNoteSubscription = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: {
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type OnUpdateNoteSubscription = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: {
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type OnDeleteNoteSubscription = {
  __typename: "Note";
  id: string;
  title: string;
  description?: string | null;
  notebook: {
    __typename: "Notebook";
    id: string;
    title: string;
    Notes?: {
      __typename: "ModelNoteConnection";
      nextToken?: string | null;
    } | null;
    user: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  };
  user: string;
  createdAt: string;
  updatedAt: string;
  notebookNotesId?: string | null;
  owner?: string | null;
};

export type OnCreateUsersSubscription = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateUsersSubscription = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteUsersSubscription = {
  __typename: "Users";
  id: string;
  masterPassword?: boolean | null;
  hash?: string | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateNotebook(
    input: CreateNotebookInput,
    condition?: ModelNotebookConditionInput
  ): Promise<CreateNotebookMutation> {
    const statement = `mutation CreateNotebook($input: CreateNotebookInput!, $condition: ModelNotebookConditionInput) {
        createNotebook(input: $input, condition: $condition) {
          __typename
          id
          title
          Notes {
            __typename
            items {
              __typename
              id
              title
              description
              user
              createdAt
              updatedAt
              notebookNotesId
              owner
            }
            nextToken
          }
          user
          createdAt
          updatedAt
          owner
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
    return <CreateNotebookMutation>response.data.createNotebook;
  }
  async UpdateNotebook(
    input: UpdateNotebookInput,
    condition?: ModelNotebookConditionInput
  ): Promise<UpdateNotebookMutation> {
    const statement = `mutation UpdateNotebook($input: UpdateNotebookInput!, $condition: ModelNotebookConditionInput) {
        updateNotebook(input: $input, condition: $condition) {
          __typename
          id
          title
          Notes {
            __typename
            items {
              __typename
              id
              title
              description
              user
              createdAt
              updatedAt
              notebookNotesId
              owner
            }
            nextToken
          }
          user
          createdAt
          updatedAt
          owner
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
    return <UpdateNotebookMutation>response.data.updateNotebook;
  }
  async DeleteNotebook(
    input: DeleteNotebookInput,
    condition?: ModelNotebookConditionInput
  ): Promise<DeleteNotebookMutation> {
    const statement = `mutation DeleteNotebook($input: DeleteNotebookInput!, $condition: ModelNotebookConditionInput) {
        deleteNotebook(input: $input, condition: $condition) {
          __typename
          id
          title
          Notes {
            __typename
            items {
              __typename
              id
              title
              description
              user
              createdAt
              updatedAt
              notebookNotesId
              owner
            }
            nextToken
          }
          user
          createdAt
          updatedAt
          owner
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
    return <DeleteNotebookMutation>response.data.deleteNotebook;
  }
  async CreateNote(
    input: CreateNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<CreateNoteMutation> {
    const statement = `mutation CreateNote($input: CreateNoteInput!, $condition: ModelNoteConditionInput) {
        createNote(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          notebook {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
          }
          user
          createdAt
          updatedAt
          notebookNotesId
          owner
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
    return <CreateNoteMutation>response.data.createNote;
  }
  async UpdateNote(
    input: UpdateNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<UpdateNoteMutation> {
    const statement = `mutation UpdateNote($input: UpdateNoteInput!, $condition: ModelNoteConditionInput) {
        updateNote(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          notebook {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
          }
          user
          createdAt
          updatedAt
          notebookNotesId
          owner
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
    return <UpdateNoteMutation>response.data.updateNote;
  }
  async DeleteNote(
    input: DeleteNoteInput,
    condition?: ModelNoteConditionInput
  ): Promise<DeleteNoteMutation> {
    const statement = `mutation DeleteNote($input: DeleteNoteInput!, $condition: ModelNoteConditionInput) {
        deleteNote(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          notebook {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
          }
          user
          createdAt
          updatedAt
          notebookNotesId
          owner
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
    return <DeleteNoteMutation>response.data.deleteNote;
  }
  async CreateUsers(
    input: CreateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<CreateUsersMutation> {
    const statement = `mutation CreateUsers($input: CreateUsersInput!, $condition: ModelUsersConditionInput) {
        createUsers(input: $input, condition: $condition) {
          __typename
          id
          masterPassword
          hash
          createdAt
          updatedAt
          owner
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
    return <CreateUsersMutation>response.data.createUsers;
  }
  async UpdateUsers(
    input: UpdateUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<UpdateUsersMutation> {
    const statement = `mutation UpdateUsers($input: UpdateUsersInput!, $condition: ModelUsersConditionInput) {
        updateUsers(input: $input, condition: $condition) {
          __typename
          id
          masterPassword
          hash
          createdAt
          updatedAt
          owner
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
    return <UpdateUsersMutation>response.data.updateUsers;
  }
  async DeleteUsers(
    input: DeleteUsersInput,
    condition?: ModelUsersConditionInput
  ): Promise<DeleteUsersMutation> {
    const statement = `mutation DeleteUsers($input: DeleteUsersInput!, $condition: ModelUsersConditionInput) {
        deleteUsers(input: $input, condition: $condition) {
          __typename
          id
          masterPassword
          hash
          createdAt
          updatedAt
          owner
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
    return <DeleteUsersMutation>response.data.deleteUsers;
  }
  async GetNotebook(id: string): Promise<GetNotebookQuery> {
    const statement = `query GetNotebook($id: ID!) {
        getNotebook(id: $id) {
          __typename
          id
          title
          Notes {
            __typename
            items {
              __typename
              id
              title
              description
              user
              createdAt
              updatedAt
              notebookNotesId
              owner
            }
            nextToken
          }
          user
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNotebookQuery>response.data.getNotebook;
  }
  async ListNotebooks(
    filter?: ModelNotebookFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotebooksQuery> {
    const statement = `query ListNotebooks($filter: ModelNotebookFilterInput, $limit: Int, $nextToken: String) {
        listNotebooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
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
    return <ListNotebooksQuery>response.data.listNotebooks;
  }
  async GetNote(id: string): Promise<GetNoteQuery> {
    const statement = `query GetNote($id: ID!) {
        getNote(id: $id) {
          __typename
          id
          title
          description
          notebook {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
          }
          user
          createdAt
          updatedAt
          notebookNotesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetNoteQuery>response.data.getNote;
  }
  async ListNotes(
    filter?: ModelNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListNotesQuery> {
    const statement = `query ListNotes($filter: ModelNoteFilterInput, $limit: Int, $nextToken: String) {
        listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            notebook {
              __typename
              id
              title
              user
              createdAt
              updatedAt
              owner
            }
            user
            createdAt
            updatedAt
            notebookNotesId
            owner
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
    return <ListNotesQuery>response.data.listNotes;
  }
  async GetUsers(id: string): Promise<GetUsersQuery> {
    const statement = `query GetUsers($id: ID!) {
        getUsers(id: $id) {
          __typename
          id
          masterPassword
          hash
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUsersQuery>response.data.getUsers;
  }
  async ListUsers(
    filter?: ModelUsersFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUsersFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            masterPassword
            hash
            createdAt
            updatedAt
            owner
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
    return <ListUsersQuery>response.data.listUsers;
  }
  OnCreateNotebookListener(
    filter?: ModelSubscriptionNotebookFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNotebook">>
  > {
    const statement = `subscription OnCreateNotebook($filter: ModelSubscriptionNotebookFilterInput, $owner: String) {
        onCreateNotebook(filter: $filter, owner: $owner) {
          __typename
          id
          title
          Notes {
            __typename
            items {
              __typename
              id
              title
              description
              user
              createdAt
              updatedAt
              notebookNotesId
              owner
            }
            nextToken
          }
          user
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNotebook">>
    >;
  }

  OnUpdateNotebookListener(
    filter?: ModelSubscriptionNotebookFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNotebook">>
  > {
    const statement = `subscription OnUpdateNotebook($filter: ModelSubscriptionNotebookFilterInput, $owner: String) {
        onUpdateNotebook(filter: $filter, owner: $owner) {
          __typename
          id
          title
          Notes {
            __typename
            items {
              __typename
              id
              title
              description
              user
              createdAt
              updatedAt
              notebookNotesId
              owner
            }
            nextToken
          }
          user
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNotebook">>
    >;
  }

  OnDeleteNotebookListener(
    filter?: ModelSubscriptionNotebookFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNotebook">>
  > {
    const statement = `subscription OnDeleteNotebook($filter: ModelSubscriptionNotebookFilterInput, $owner: String) {
        onDeleteNotebook(filter: $filter, owner: $owner) {
          __typename
          id
          title
          Notes {
            __typename
            items {
              __typename
              id
              title
              description
              user
              createdAt
              updatedAt
              notebookNotesId
              owner
            }
            nextToken
          }
          user
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNotebook">>
    >;
  }

  OnCreateNoteListener(
    filter?: ModelSubscriptionNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNote">>
  > {
    const statement = `subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput, $owner: String) {
        onCreateNote(filter: $filter, owner: $owner) {
          __typename
          id
          title
          description
          notebook {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
          }
          user
          createdAt
          updatedAt
          notebookNotesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateNote">>
    >;
  }

  OnUpdateNoteListener(
    filter?: ModelSubscriptionNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNote">>
  > {
    const statement = `subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput, $owner: String) {
        onUpdateNote(filter: $filter, owner: $owner) {
          __typename
          id
          title
          description
          notebook {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
          }
          user
          createdAt
          updatedAt
          notebookNotesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateNote">>
    >;
  }

  OnDeleteNoteListener(
    filter?: ModelSubscriptionNoteFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNote">>
  > {
    const statement = `subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput, $owner: String) {
        onDeleteNote(filter: $filter, owner: $owner) {
          __typename
          id
          title
          description
          notebook {
            __typename
            id
            title
            Notes {
              __typename
              nextToken
            }
            user
            createdAt
            updatedAt
            owner
          }
          user
          createdAt
          updatedAt
          notebookNotesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteNote">>
    >;
  }

  OnCreateUsersListener(
    filter?: ModelSubscriptionUsersFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsers">>
  > {
    const statement = `subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput, $owner: String) {
        onCreateUsers(filter: $filter, owner: $owner) {
          __typename
          id
          masterPassword
          hash
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateUsers">>
    >;
  }

  OnUpdateUsersListener(
    filter?: ModelSubscriptionUsersFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsers">>
  > {
    const statement = `subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput, $owner: String) {
        onUpdateUsers(filter: $filter, owner: $owner) {
          __typename
          id
          masterPassword
          hash
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateUsers">>
    >;
  }

  OnDeleteUsersListener(
    filter?: ModelSubscriptionUsersFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsers">>
  > {
    const statement = `subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput, $owner: String) {
        onDeleteUsers(filter: $filter, owner: $owner) {
          __typename
          id
          masterPassword
          hash
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteUsers">>
    >;
  }
}
