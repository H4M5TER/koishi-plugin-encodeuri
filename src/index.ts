import { Context, Schema } from 'koishi'

export const name = 'encodeuri'

export interface Config { }

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  const factory = (f: (string) => string) => {
    ctx.command(`${f.name.slice(0, 6)}.${f.name.slice(6)} <text:text>`)
      .action((argv, text) => {
        return f(text)
      })
  }
  [encodeURI, decodeURI, encodeURIComponent, decodeURIComponent].forEach(f => factory(f))
}
