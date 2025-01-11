export interface CofigMessage{
  msgType: "ConfigData";
  data: ConfigData
}

export interface ConfigData {
  wifi_led_enabled: boolean;
  motor_enabled: boolean;
  launch_led_enabled: boolean;
  audio_enabled: boolean;
  pwr_led_enabled: boolean;
  reset_on_remove_enabled: boolean;
  defAudioPath: string;
  ZapIP: string;
  pin_I2S_DOUT: number | null;
  pin_I2S_BCLK: number | null;
  pin_I2S_LRC: number | null;
  val_AUDIO_GAIN: number | null;
  pin_MOTOR_PIN: number | null;
  pin_WIFI_LED_PIN: number | null;
  pin_LAUNCH_LED_PIN: number | null;
  pin_EXTERNAL_POWER_LED: number | null;
  mister_enabled: boolean;
  steamOS_enabled: boolean;
  sdCard_enabled: boolean;
  SteamIP: string;
  defDetectAudioPath: string;
  defRemoveAudioPath: string;
  defErrAudioPath: string;
  systemAudio_enabled: boolean;
  gameAudio_enabled: boolean;
  buzz_on_detect_enabled: boolean;
  buzz_on_launch_enabled: boolean;
  buzz_on_remove_enabled: boolean;
  buzz_on_error_enabled: boolean;
  PN532_module: boolean;
  zap_ws_path: string;
};