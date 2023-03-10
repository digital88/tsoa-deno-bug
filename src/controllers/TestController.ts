import { Controller, Get, Query, Route } from "tsoa";
import { TestDataResponse } from "../models/TestDataResponse.ts";

interface TestDataResponse1 {
  data: string;
}

@Route("test")
export class TestController extends Controller {
  @Get()
  public getTestData(@Query() text?: string): Promise<TestDataResponse> {
    return Promise.resolve({ data: text || "" });
  }
}
