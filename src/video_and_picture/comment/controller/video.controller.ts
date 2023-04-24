import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import axios from 'axios';

@Controller('video')
export class VideoController {
  @Get(':videoId')
  async getVideo(@Param('videoId') videoId: string, @Res() res: Response) {
    try {
      const videoUrl = `https://example.com/api/video/${videoId}`;
      const response = await axios.get(videoUrl, {
        responseType: 'stream',
      });

      const videoStream = response.data;
      videoStream.pipe(res);
    } catch (error) {
      console.log('Error retrieving video:', error);
      res.status(500).send('Error retrieving video');
    }
  }
}
