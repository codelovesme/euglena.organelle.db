import { Particle, MetaAdditions, Count } from "@euglena/core";
import { sys } from "cessnalib";
export declare const particles: {
    incoming: {
        ReadParticle: (query: sys.type.RecursivePartial<Particle<string, unknown, {}>>, count?: Count, adds?: MetaAdditions) => Particle<"ReadParticle", {
            query: sys.type.RecursivePartial<Particle<string, unknown, {}>>;
            count: Count;
        }, {}>;
        SaveParticle: (particle: Particle<string, unknown, {}>, query?: sys.type.RecursivePartial<Particle<string, unknown, {}>>, count?: Count, adds?: MetaAdditions) => Particle<"SaveParticle", {
            particle: Particle<string, unknown, {}>;
            query: sys.type.RecursivePartial<Particle<string, unknown, {}>>;
            count: Count;
        }, {}>;
        RemoveParticle: (query: sys.type.RecursivePartial<Particle<string, unknown, {}>>, count?: Count, adds?: MetaAdditions) => Particle<"RemoveParticle", {
            query: sys.type.RecursivePartial<Particle<string, unknown, {}>>;
            count: Count;
        }, {}>;
        VacuoleSap: (particles: Particle<string, unknown, {}>[], adds?: MetaAdditions) => Particle<"VacuoleSap", Particle<string, unknown, {}>[], {}>;
    };
    outgoing: {
        ACK: (adds?: MetaAdditions) => Particle<"ACK", unknown, {}>;
        Exception: (message: string, innerException?: sys.type.Exception, adds?: MetaAdditions) => Particle<"Exception", sys.type.Exception, {}>;
        Particles: (particlesArray: Particle<string, unknown, {}>[], adds?: MetaAdditions) => Particle<"Particles", Particle<string, unknown, {}>[], {}>;
        Metas: (metas: {
            id: string;
            name: string;
            createTime: number;
            expireTime?: number;
        }[], adds?: MetaAdditions) => Particle<"Metas", unknown, {}>;
    };
};
