const MAX_FREQ        = 20000;
const NOTE_NUMBER_MIN = 0;
const NOTE_NUMBER_MAX = 127;

const SAWTOOTH = 0;
const SQUARE   = 1;
const TRIANGLE = 2;

const ON  = 127;
const OFF = 0;

const DATA_BYTE_MAX         = 0x7F;
const STATUS_BYTE_INVALID   = 0x7F;
const DATA_BYTE_INVALID     = 0x80;
const STATUS_BYTE_MIN       = 0x80;
const NOTE_OFF              = 0x80;
const NOTE_ON               = 0x90;
const CONTROL_CHANGE        = 0xB0;
const SYSTEM_MESSAGE_MIN    = 0xF0;
const SYSTEM_EXCLUSIVE      = 0xF0;
const TIME_CODE             = 0xF1;
const SONG_POSITION         = 0xF2;
const SONG_SELECT           = 0xF3;
const TUNE_REQUEST          = 0xF6;
const EOX                   = 0xF7;
const REAL_TIME_MESSAGE_MIN = 0xF8;
const ACTIVE_SENSING        = 0xFE;

const VCO_1_WAVEFORM        = 14;
const VCO_1_COARSE_TUNE     = 15;
const VCO_2_WAVEFORM        = 16;
const VCO_2_COARSE_TUNE     = 17;
const VCO_2_FINE_TUNE       = 18;
const VCO_3_WAVEFORM        = 19;
const VCO_3_COARSE_TUNE     = 20;
const VCO_3_FINE_TUNE       = 21;
const VCF_CUTOFF_FREQUENCY  = 22;
const VCF_RESONANCE         = 23;
const VCF_ENVELOPE_AMOUNT   = 24;
const EG_ATTACK_TIME        = 25;
const EG_DECAY_TIME         = 26;
const EG_SUSTAIN_LEVEL      = 27;
const ALL_NOTES_OFF         = 123;
