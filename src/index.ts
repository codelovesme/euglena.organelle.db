import { ccp, Particle, MetaAdditions, cp, Count } from "@euglena/core";
import { sys } from "cessnalib";

export const particles = {
  incoming: {
    ReadParticle: (query: sys.type.RecursivePartial<Particle>, count: Count = 1, adds?: MetaAdditions) => cp("ReadParticle", { query, count }, adds),
    SaveParticle: (particle: Particle, query?: sys.type.RecursivePartial<Particle>, count: Count = 1, adds?: MetaAdditions) => cp("SaveParticle", { particle, query, count }, adds),
    RemoveParticle: ccp.RemoveParticle,
    VacuoleSap: (particles: Particle[], adds?: MetaAdditions) => cp("VacuoleSap", particles, adds)
  },
  outgoing: {
    ACK: ccp.ACK,
    Exception: ccp.Exception,
    Particles: ccp.Particles,
    Metas: ccp.Metas
  }
};
