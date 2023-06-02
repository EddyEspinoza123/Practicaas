"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteController = void 0;
const common_1 = require("@nestjs/common");
const pacientes_service_1 = require("./pacientes.service");
const create_paciente_paci_1 = require("./paci/create-paciente.paci");
const update_paciente_paci_1 = require("./paci/update-paciente.paci");
let PacienteController = class PacienteController {
    constructor(pacientesServices) {
        this.pacientesServices = pacientesServices;
    }
    create(CreatePacientesPaci) {
        return this.pacientesServices.create(CreatePacientesPaci);
    }
    findAll() {
        return this.pacientesServices.findAll();
    }
    findOne(id) {
        return this.pacientesServices.findOne(id);
    }
    update(id, UpdatePacientesPaci) {
        return this.pacientesServices.update(+id, UpdatePacientesPaci);
    }
    remove(id) {
        return this.pacientesServices.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_paciente_paci_1.CreatePacientesPaci]),
    __metadata("design:returntype", void 0)
], PacienteController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], PacienteController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PacienteController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_paciente_paci_1.UpdatePacientesPaci]),
    __metadata("design:returntype", void 0)
], PacienteController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PacienteController.prototype, "remove", null);
PacienteController = __decorate([
    (0, common_1.Controller)('pacientes'),
    __metadata("design:paramtypes", [pacientes_service_1.PacientesService])
], PacienteController);
exports.PacienteController = PacienteController;
//# sourceMappingURL=pacientes.controller.js.map