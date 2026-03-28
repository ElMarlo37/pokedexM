import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { Model } from 'mongoose';
import { Pokemon } from './entities/pokemon.entity';
export declare class PokemonService {
    private readonly pokemonModel;
    constructor(pokemonModel: Model<Pokemon>);
    create(createPokemonDto: CreatePokemonDto): Promise<import("mongoose").Document<unknown, {}, Pokemon, {}, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Pokemon, {}, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, Pokemon, {}, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, updatePokemonDto: UpdatePokemonDto): Promise<(import("mongoose").Document<unknown, {}, Pokemon, {}, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, Pokemon, {}, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    capture(id: string): Promise<(import("mongoose").Document<unknown, {}, Pokemon, {}, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    release(id: string): Promise<(import("mongoose").Document<unknown, {}, Pokemon, {}, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
