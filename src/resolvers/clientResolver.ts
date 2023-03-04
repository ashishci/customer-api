import { Arg, Mutation, Query, Resolver, Resolver } from "type-graphql";
import { Client, ClientInput } from '../schemas/client'

@Resolver((_of) => Client)
export class ClientResolver {
    private clients: Client[] = []

    @Query((_returns) => [Client], { nullable: true })
    async getClients(): Promise<Client[]> {
        return this.clients
    }
}

