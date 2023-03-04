import { Field, InputType, ObjectType } from 'type-graphql'

@ObjectType({ description: "Object representing client" })
export class Client {
    @Field()
    id?: number

    @Field()
    firstName?: string

    @Field()
    lastName?: string

    @Field()
    email?: string

    @Field()
    password?: string

    @Field()
    clientDetailId?: string

    @Field()
    isActive?: boolean

}

@InputType()
export class ClientInput implements Partial<Client> {
    @Field()
    firstName?: string;

    @Field()
    lastName?: string

    @Field()
    email?: string;

    @Field()
    password?: string;
}