import { ChannelBrandingSettingsInterface } from "../../Channel/ChannelBrandingSettingsInterface";
import { ChannelContentDetailsInterface } from "../../Channel/ChannelContentDetailsInterface";
import { ChannelSnippetInterface } from "../../Channel/ChannelSnippetInterface";
import { ChannelStatisticsInterface } from "../../Channel/ChannelStatisticsInterface";

export interface ChannelResponseInterface {
  kind: string;
  id: string;
  snippet: ChannelSnippetInterface;
  contentDetails: ChannelContentDetailsInterface;
  statistics: ChannelStatisticsInterface;
  brandingSettings: ChannelBrandingSettingsInterface;
}
