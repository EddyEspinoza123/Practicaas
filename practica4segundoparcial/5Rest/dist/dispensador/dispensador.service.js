"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispensadorService = void 0;
const common_1 = require("@nestjs/common");
const dispensador_entity_1 = require("./entities/dispensador.entity");
let DispensadorService = class DispensadorService {
    constructor() {
        this.dispensador = [
            { id: 1, descripcion: 'Uno' },
            { id: 2, descripcion: 'Dos' },
        ];
    }
    create(createDispensadorDto) {
        const dispensador = new dispensador_entity_1.Dispensador();
        dispensador.id = Math.max(...this.dispensador.map(elemento => elemento.id), 0) + 1;
        dispensador.descripcion = createDispensadorDto.descripcion;
        this.dispensador.push(dispensador);
        return dispensador;
    }
    findAll() {
        return this.dispensador;
    }
    findOne(id) {
        const dispensador = this.dispensador.find(dispensador => dispensador.id === id);
        if (!dispensador)
            throw new common_1.NotFoundException(`ID ${id} not found`);
        return dispensador;
    }
    update(id, updateEstudianteDto) {
        const { descripcion } = updateEstudianteDto;
        const dispensador = this.findOne(id);
        if (descripcion)
            dispensador.descripcion = descripcion;
        this.dispensador = this.dispensador.map(elemento => {
            if (elemento.id === id)
                return dispensador;
            return elemento;
        });
        return dispensador;
    }
    remove(id) {
        this.findOne(id);
        this.dispensador = this.dispensador.filter(elemento => elemento.id !== id);
    }
};
DispensadorService = __decorate([
    (0, common_1.Injectable)()
], DispensadorService);
exports.DispensadorService = DispensadorService;
//# sourceMappingURL=dispensador.service.js.map