import { Document } from "mongoose";
export declare class Pokemon extends Document {
    name: string;
    no: number;
    isCaptured: boolean;
}
export declare const PokemonSchema: import("mongoose").Schema<Pokemon, import("mongoose").Model<Pokemon, any, any, any, (Document<unknown, any, Pokemon, any, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}) | (Document<unknown, any, Pokemon, any, import("mongoose").DefaultSchemaOptions> & Pokemon & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}), any, Pokemon>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Pokemon, Document<unknown, {}, Pokemon, {
    id: string;
}, import("mongoose").DefaultSchemaOptions> & Omit<Pokemon & Required<{
    _id: import("mongoose").Types.ObjectId;
}> & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    _id?: import("mongoose").SchemaDefinitionProperty<import("mongoose").Types.ObjectId, Pokemon, Document<unknown, {}, Pokemon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    name?: import("mongoose").SchemaDefinitionProperty<string, Pokemon, Document<unknown, {}, Pokemon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    no?: import("mongoose").SchemaDefinitionProperty<number, Pokemon, Document<unknown, {}, Pokemon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
    isCaptured?: import("mongoose").SchemaDefinitionProperty<boolean, Pokemon, Document<unknown, {}, Pokemon, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<Pokemon & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, Pokemon>;
