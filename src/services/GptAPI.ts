import axios from "axios";
import { AxiosPromise } from "axios";
import { CompletionParameters } from "../slices/editorSlice";

export interface ChoiceResult {
  finish_reason: string;
  index: number;
  text: string;
}

class GptAPI {
  static generateCompletions(
    prompt: string | Array<string>,
    completionParams: CompletionParameters,
    n: number = 1
  ): AxiosPromise {
    return axios({
      method: "POST",
      url: `http://192.168.1.140:3000/completions`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        prompt: prompt,
        n: n,
        max_tokens: completionParams.maxTokens,
        temperature: completionParams.temperature,
        stop: completionParams.stop,
        top_p: completionParams.topP,
        presence_penalty: completionParams.presencePenalty,
        frequency_penalty: completionParams.frequencyPenalty,
      },
    });
  }
}

export default GptAPI;
