import { Controller, Get, Param, Res } from '@nestjs/common';
import axios from 'axios';
import { Response } from 'express';

@Controller('picture')
export class PictureController {
  @Get(':pictureId')
  async getPicture(@Param('pictureId') pictureId: string, @Res() res: Response) {
    const apiUrl = 'https://api.example.com/pictures/';
    const pictureUrl = apiUrl + pictureId;

    try {
      const response = await axios.get(pictureUrl, { responseType: 'stream' });
      response.data.pipe(res);
    } catch (error) {
      res.status(error.response.status).send(error.response.statusText);
    }
  }
}