#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { TypescriptNodeStack } from '../lib/typescript-node-stack';

const app = new cdk.App();
const stack = new TypescriptNodeStack(app, 'TypescriptNodeStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'ap-northeast-1',
  },
});
cdk.Tags.of(stack).add('tag-key', 'make-cdk');
