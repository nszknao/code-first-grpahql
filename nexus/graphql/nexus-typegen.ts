/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as PrismaClient from ".prisma/client"
import { Context } from "./context"
import { core, connectionPluginCore } from "nexus"

declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName> & { totalCount: core.FieldResolver<core.FieldTypeName<TypeName, FieldName>, "totalCount"> }
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Post: PrismaClient.Post;
  PostConnection: { // root type
    edges?: Array<NexusGenRootTypes['PostEdge'] | null> | null; // [PostEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PostEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Post'] | null; // Post
  }
  Query: {};
  User: PrismaClient.User;
}

export interface NexusGenInterfaces {
  Node: core.Discriminate<'Post', 'required'> | core.Discriminate<'User', 'required'>;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Post: { // field return type
    author: NexusGenRootTypes['User']; // User!
    body: string; // String!
    id: string; // ID!
    published: boolean; // Boolean!
    title: string; // String!
  }
  PostConnection: { // field return type
    edges: Array<NexusGenRootTypes['PostEdge'] | null> | null; // [PostEdge]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
    totalCount: number | null; // Int
  }
  PostEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Post'] | null; // Post
  }
  Query: { // field return type
    authors: Array<NexusGenRootTypes['User'] | null>; // [User]!
    drafts: Array<NexusGenRootTypes['Post'] | null>; // [Post]!
  }
  User: { // field return type
    depricated: string; // String!
    email: string; // String!
    id: string; // ID!
    name: string; // String!
    posts: NexusGenRootTypes['PostConnection'] | null; // PostConnection
    posts2: NexusGenRootTypes['PostConnection'] | null; // PostConnection
  }
  Node: { // field return type
    id: string; // ID!
  }
}

export interface NexusGenFieldTypeNames {
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Post: { // field return type name
    author: 'User'
    body: 'String'
    id: 'ID'
    published: 'Boolean'
    title: 'String'
  }
  PostConnection: { // field return type name
    edges: 'PostEdge'
    pageInfo: 'PageInfo'
    totalCount: 'Int'
  }
  PostEdge: { // field return type name
    cursor: 'String'
    node: 'Post'
  }
  Query: { // field return type name
    authors: 'User'
    drafts: 'Post'
  }
  User: { // field return type name
    depricated: 'String'
    email: 'String'
    id: 'ID'
    name: 'String'
    posts: 'PostConnection'
    posts2: 'PostConnection'
  }
  Node: { // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  User: {
    posts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    posts2: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Node: "Post" | "User"
}

export interface NexusGenTypeInterfaces {
  Post: "Node"
  User: "Node"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    __typename: true
    isTypeOf: false
    resolveType: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}