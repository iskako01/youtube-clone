import { VideoContentDetailsInterface } from "../../Video/Detail/VideoContentDetailsInterface";
import { VideoDetailSnippetInterface } from "../../Video/Detail/VideoDetailSnippetInterface";
import { VideoDetailStatisticsInterface } from "../../Video/Detail/VideoDetailStatisticsInterface";

export interface VideoDetailResponseInterface {
  id: string;
  kind: string;
  snippet: VideoDetailSnippetInterface;
  contentDetails: VideoContentDetailsInterface;
  statistics: VideoDetailStatisticsInterface;
}
