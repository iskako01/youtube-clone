import { VideoIdInterface } from "./VideoIdInterface";
import { VideoSnippetInterface } from "./VideoSnippetInterface";

export interface VideoResponseInterface {
  id: VideoIdInterface;
  kind: string;
  snippet: VideoSnippetInterface;
}
