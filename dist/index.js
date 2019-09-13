"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@euglena/core");
exports.particles = {
    incoming: {
        ReadParticle: function (query, count, adds) {
            if (count === void 0) { count = 1; }
            return core_1.cp("ReadParticle", { query: query, count: count }, adds);
        },
        SaveParticle: function (particle, query, count, adds) {
            if (count === void 0) { count = 1; }
            return core_1.cp("SaveParticle", { particle: particle, query: query, count: count }, adds);
        },
        RemoveParticle: core_1.ccp.RemoveParticle,
        VacuoleSap: function (particles, adds) { return core_1.cp("VacuoleSap", particles, adds); }
    },
    outgoing: {
        ACK: core_1.ccp.ACK,
        Exception: core_1.ccp.Exception,
        Particles: core_1.ccp.Particles,
        Metas: core_1.ccp.Metas
    }
};
//# sourceMappingURL=index.js.map