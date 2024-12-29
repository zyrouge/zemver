export interface ZemVerFields {
    year: number;
    month: number;
    code: number;
    prerelease?: string;
    build?: string;
}

export type ZemVerPartialFields = Partial<ZemVerFields>;

/**
 * ZemVer follows the convention of `<year>.<month>.<code>[-<prerelease>][+<build>]`.
 *
 * Examples: `2024.1.1`, `2024.1.1-stable`, `2024.1.1+c05bda`, `2024.1.1-stable+c05bda`.
 *
 * Note: `build` may be numeric.
 */
export class ZemVer {
    constructor(
        public readonly year: number,
        public readonly month: number,
        public readonly code: number,
        public readonly prerelease?: string,
        public readonly build?: string,
    ) {}

    copyWith(fields?: ZemVerPartialFields) {
        return new ZemVer(
            fields?.year ?? this.year,
            fields?.month ?? this.month,
            fields?.code ?? this.code,
            fields?.prerelease ?? this.prerelease,
            fields?.build ?? this.build,
        );
    }

    bump(withFields?: ZemVerPartialFields) {
        const date = new Date();
        return this.copyWith({
            ...withFields,
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            code: this.code + 1,
        });
    }

    toFields() {
        return {
            year: this.year,
            month: this.month,
            code: this.code,
            prerelease: this.prerelease,
            build: this.build,
        } as ZemVerFields;
    }

    toString() {
        let version = `${this.year}.${this.month}.${this.code}`;
        if (this.prerelease) {
            version += `-${this.prerelease}`;
        }
        if (this.build && this.build !== "0") {
            version += `+${this.build}`;
        }
        return version;
    }

    static parseRegex = /^(\d{4})\.(\d{1,2})\.(\d+)(?:\-([^+]+))?(?:\+(.+))?$/;

    static parse(value: string) {
        const match = value.match(this.parseRegex);
        if (match === null) {
            throw new Error("Unable to parse version");
        }
        const year = parseInt(match[1]!);
        const month = parseInt(match[2]!);
        const code = parseInt(match[3]!);
        const prerelease = match[4];
        const build = match[5];
        return new ZemVer(year, month, code, prerelease, build);
    }

    static fromFields(fields: ZemVerFields) {
        return new ZemVer(
            fields.year,
            fields.month,
            fields.code,
            fields.prerelease,
            fields.build,
        );
    }
}
