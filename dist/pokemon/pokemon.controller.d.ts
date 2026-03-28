import { PokemonService } from './pokemon.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
export declare class PokemonController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonService);
    create(createPokemonDto: CreatePokemonDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    findOne(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    update(id: string, updatePokemonDto: UpdatePokemonDto): Promise<(import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    remove(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    capture(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    release(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./entities/pokemon.entity").Pokemon, {}, import("mongoose").DefaultSchemaOptions> & import("./entities/pokemon.entity").Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
}
