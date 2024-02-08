import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LaboratoryService } from './laboratory.service';
import { CreateLaborotoryDTO } from './DTOs/CreateLabotory.Dto';
import { Laboratory } from 'src/Entitys/Laborotary.Entity';
import { UpdatedLaborotoryDTO } from './DTOs/UpdateLabotory.Dto';

@Controller('laboratory')
@ApiTags('Laboratory')
export class LaboratoryController {

    constructor(private LaborotoryServices: LaboratoryService) {};

    @Post()

    @ApiOperation({summary:'Laboratory patient created '})
    @ApiResponse({ status: 200, description: 'Laboratory patient created successfullly ' })
    createLaborotoryPatient(@Body() LabDTO:CreateLaborotoryDTO){
        this.LaborotoryServices.createLaborotoryPatient(LabDTO)
        return 'Laborotory patient created sucessfully';

    }

    @Get()
    @ApiOperation({summary:'return all Laboratory patients'})
    @ApiResponse({ status: 200, description: 'return all Laborotary patient  ' })
    async findAllLabotoryPatients(){
        const patients= await this.LaborotoryServices.findAllLabotoryPatients();
        return patients;
  

    }
    @Get(':name')
    @ApiOperation({summary:'get an Laboratory patient  '})
    @ApiResponse({ status: 200, description: 'an Laboratory patient returned successfullly ' })
    async findLaborotorypatientByName(@Param('name') name: string): Promise<Laboratory[] | string> {
      if (!name) {
        return 'Name is not provided';
      }
    
      const results = await this.LaborotoryServices.findLaborotorypatientByName(name);
    
      if (results.length === 0) {
        return 'Name not found';
      }
    
      return results;
    }
  
    @Put(':ID')
    @ApiOperation({summary:'update Laboratory patient by id'})
    @ApiResponse({ status: 200, description: 'Laboratory patient updated successfullly ' })
    
    async UpdateLaborotoryPatientById(@Param('ID',ParseIntPipe) ID:number,@Body() UpadatedLabDto:UpdatedLaborotoryDTO){
        await this.LaborotoryServices.UpdateLaborotoryPatientById(ID,UpadatedLabDto)
        
          return 'lab patient updated sucessfully'
      }

    @Delete(':ID')
    @ApiOperation({summary:'Delete Laboratory patient  '})
    @ApiResponse({ status: 200, description: 'Laboratory patient deleted successfullly ' })

    DeleteLabPatientByI(@Param('ID',ParseIntPipe)ID:number){
        this.LaborotoryServices.DeleteLabPatientById(ID);
          return 'lab patient deleted sucessfully'
      }
  
}