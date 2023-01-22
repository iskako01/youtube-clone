import { VideoIdInterface } from "../../Video/VideoIdInterface";
import { VideoSnippetInterface } from "../../Video/VideoSnippetInterface";

export interface VideoResponseInterface {
  id: VideoIdInterface;
  kind: string;
  snippet: VideoSnippetInterface;
}
