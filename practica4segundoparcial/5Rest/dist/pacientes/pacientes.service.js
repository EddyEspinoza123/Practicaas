"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacientesService = void 0;
const common_1 = require("@nestjs/common");
const pacientes_entity_1 = require("./entities/pacientes.entity");
let PacientesService = class PacientesService {
    constructor() {
        this.pacientes = [
            { id: 1, nombre: 'Juan', identificacion: '1314502574' },
            { id: 2, nombre: 'Jose', identificacion: '1314502754' },
        ];
    }
    create(createPacientesPaci) {
        const pacientes = new pacientes_entity_1.Pacientes();
        pacientes.id = Math.max(...this.pacientes.map(elemento => elemento.id), 0) + 1;
        pacientes.nombre = createPacientesPaci.nombre;
        pacientes.identificacion = createPacientesPaci.identificacion;
        this.pacientes.push(pacientes);
        return pacientes;
    }
    findAll() {
        return this.pacientes;
    }
    findOne(id) {
        const pacientes = this.pacientes.find(pacientes => pacientes.id === id);
        if (!pacientes)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return pacientes;
    }
    update(id, updatePacientesPaci) {
        const { nombre } = updatePacientesPaci;
        const { identificacion } = updatePacientesPaci;
        const pacientes = this.findOne(id);
        if (nombre)
            pacientes.nombre = nombre;
        if (identificacion)
            pacientes.identificacion = identificacion;
        this.pacientes = this.pacientes.map(elemento => {
            if (elemento.id === id)
                return pacientes;
            return elemento;
        });
        return pacientes;
    }
    remove(id) {
        this.findOne(id);
        this.pacientes = this.pacientes.filter(elemento => elemento.id !== id);
    }
};
PacientesService = __decorate([
    (0, common_1.Injectable)()
], PacientesService);
exports.PacientesService = PacientesService;
//# sourceMappingURL=pacientes.service.js.map