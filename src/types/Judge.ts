export interface Language {
    id: number;
    name: string;
    [property: string]: any;
}

export enum JudegeStatuses {
    InQueue = 1,
    Processing = 2,
    Accepted = 3,
    WrongAnswer = 4,
    TimeLimitExceeded = 5,
    CompilationError = 6,
    RuntimeErrorSIGSEGV = 7,
    RuntimeErrorSIGXFSZ = 8,
    RuntimeErrorSIGFPE = 9,
    RuntimeErrorSIGABRT = 10,
    RuntimeErrorNZEC = 11,
    RuntimeErrorOther = 12,
    InternalError = 13,
    ExecFormatError = 14,
}

export const JudegeStatusesString = {
    [JudegeStatuses.InQueue]: "In Queue",
    [JudegeStatuses.Processing]: "Processing",
    [JudegeStatuses.Accepted]: "Accepted",
    [JudegeStatuses.WrongAnswer]: "Wrong Answer",
    [JudegeStatuses.TimeLimitExceeded]: "Time Limit Exceeded",
    [JudegeStatuses.CompilationError]: "Compilation Error",
    [JudegeStatuses.RuntimeErrorSIGSEGV]: "Runtime Error (SIGSEGV)",
    [JudegeStatuses.RuntimeErrorSIGXFSZ]: "Runtime Error (SIGXFSZ)",
    [JudegeStatuses.RuntimeErrorSIGFPE]: "Runtime Error (SIGFPE)",
    [JudegeStatuses.RuntimeErrorSIGABRT]: "Runtime Error (SIGABRT)",
    [JudegeStatuses.RuntimeErrorNZEC]: "Runtime Error (NZEC)",
    [JudegeStatuses.RuntimeErrorOther]: "Runtime Error (Other)",
    [JudegeStatuses.InternalError]: "Internal Error",
    [JudegeStatuses.ExecFormatError]: "Exec Format Error"
}

export const JudegeStatusesAbbr = {
    [JudegeStatuses.InQueue]: "IQ",
    [JudegeStatuses.Processing]: "P",
    [JudegeStatuses.Accepted]: "AC",
    [JudegeStatuses.WrongAnswer]: "WA",
    [JudegeStatuses.TimeLimitExceeded]: "TL",
    [JudegeStatuses.CompilationError]: "CE",
    [JudegeStatuses.RuntimeErrorSIGSEGV]: "RE",
    [JudegeStatuses.RuntimeErrorSIGXFSZ]: "RE",
    [JudegeStatuses.RuntimeErrorSIGFPE]: "RE",
    [JudegeStatuses.RuntimeErrorSIGABRT]: "RE",
    [JudegeStatuses.RuntimeErrorNZEC]: "RE",
    [JudegeStatuses.RuntimeErrorOther]: "RE",
    [JudegeStatuses.InternalError]: "IE",
    [JudegeStatuses.ExecFormatError]: "EFE"
}

export const JudegeStatusesColor = {
    [JudegeStatuses.InQueue]: "#FFFFFF",
    [JudegeStatuses.Processing]: "#79BBFF",
    [JudegeStatuses.Accepted]: "#67C23A",
    [JudegeStatuses.WrongAnswer]: "#F56C6C",
    [JudegeStatuses.TimeLimitExceeded]: "#E6A23C",
    [JudegeStatuses.CompilationError]: "#337ECC",
    [JudegeStatuses.RuntimeErrorSIGSEGV]: "#337ECC",
    [JudegeStatuses.RuntimeErrorSIGXFSZ]: "#337ECC",
    [JudegeStatuses.RuntimeErrorSIGFPE]: "#337ECC",
    [JudegeStatuses.RuntimeErrorSIGABRT]: "#337ECC",
    [JudegeStatuses.RuntimeErrorNZEC]: "#337ECC",
    [JudegeStatuses.RuntimeErrorOther]: "#337ECC",
    [JudegeStatuses.InternalError]: "#337ECC",
    [JudegeStatuses.ExecFormatError]: "#337ECC"
}