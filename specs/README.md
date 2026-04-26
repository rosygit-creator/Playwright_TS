# Specs

This is a directory for test plans.





# to run nightly job from codebuild
1. Create a ./buildspec.yml file 
2. Create a AWS Codebuild project: playwright-nightly-tests
2. Create a s3 bucket to upload the playwright test runs report else it is lost after test run : playwright-reports-ra1
3. add code in ./buildspec.yml:
    3.1 # Upload HTML report to S3 (recommended)
    3.2 # Build report URL
4. Setup slack webhook to receive messages in #slack
5. Use Amazon EventBridge (cron scheduler) to trigger CodeBuild.


<!-- Notes:
Codebuild project name: playwright-nightly-tests
Service role: codebuild-pw-nightly-tests-service-role-ra1
in AWS, Artifcats-- name should be same as $REPORT_DIR in buildspec.yml (here: playwright-report-nightly)
s3 bucket name: playwright-reports-ra1 -->

# setup slack codebuild integration
1. create a webhook in slacl, add new slack channel
2. add webhook url to aws secets manager
3. Create a policy and add it to service role
4. add env variable in codebuild project
5. update buildspec.yml
6. commit oce and run the build from AWS


# Services used:
1. Codebuild
2. IAM
3. Secrets manager
4. S3
5. Cloudwatch



https://hooks.slack.com/services/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

https://hooks.slack.com/services/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