import { SnippetThumbnailsInterface } from "./SnippetThumbnailsInterface";

export interface VideoSnippetInterface {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: SnippetThumbnailsInterface;
  title: string;
}
